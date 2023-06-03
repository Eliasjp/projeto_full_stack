import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor (private clientService: ClientService, private jwtService: JwtService){}

    async validateClient(clientEmail: string, clientPassword: string){
        const client = await this.clientService.findByEmail(clientEmail)
        if (client){
            const matched = await compare(clientPassword, client.password)
            if (matched){
                return {
                    email: client.email
                }
            }
        }

        return null
    }

    async login(email: string) {
        const client = await this.clientService.findByEmail(email)
        return {
            token: this.jwtService.sign({email}, {subject: client.id})
        }
    }
}

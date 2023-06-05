import { useForm } from "react-hook-form";
import { Input } from "./Input.component";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, loginSchema } from "../schema/client.schema";
import api from "../service/api.service";
import { useEffect } from "react";

export function LoginForm (){
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
      });

    async function testefunc (){
        console.log(await api.get("/client"))
    }

    useEffect(() => {
        testefunc()
    }, [])
    async function submitLogin (data: any){
       console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submitLogin)} className="w-3/5 lg:w-4/5 mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-3">
                <label htmlFor="">Email</label>
                <Input inputPlaceholder="Digite seu email" inputType="text" toForm={register("email")}/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="">Password</label>
                <Input inputPlaceholder="Digite sua senha" inputType="password" toForm={register("email")}/>
            </div>
            <button type="submit">Entrar</button>
        </form>
    )
}
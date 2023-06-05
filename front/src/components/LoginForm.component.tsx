import { Input } from "./Input.component";

export function LoginForm (){

    return (
        <form action="" className="w-3/5 lg:w-4/5 mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-3">
                <label htmlFor="">Email</label>
                <Input inputPlaceholder="Digite seu email" inputType="text"/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="">Password</label>
                <Input inputPlaceholder="Digite sua senha" inputType="password"/>
            </div>
        </form>
    )
}
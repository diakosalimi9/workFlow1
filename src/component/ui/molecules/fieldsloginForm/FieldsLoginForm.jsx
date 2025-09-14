// import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { useState } from "react";
import Icon from "../../atom/icon/Icon";
import Input from "../../atom/input/Input";
import P from "../../atom/p/P";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../atom/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useradmins, users } from "../../../../Chore/Array/Array";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

export default function FieldsLoginForm() {
    const [user, setUser] = useLocalStorage("users", users)
    const [activeField, setActiveField] = useState(null)
    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            Email: "",
            password: "",
        },
        validationSchema: Yup.object({
            Email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
        }),
        onSubmit: (e, values) => {
            console.log(useradmins);
            user.map((item) => {
                formik.values.Email === item.email && formik.values.password === item.password && item.role === "admin" ? user.find((i) => i.email === formik.values.Email && i.password === formik.values.password && i.role === "admin" ? setUser([]) :"") : alert("ورود کردید");
            })
        }
    });

    return (
        <div className=" flex flex-col gap-8">
            <div className="flex flex-col gap-1 items-center">
                <Icon name="h" />
                <div className="w-[200px] h-[44px] bg-black"></div>
                <P className={`font-InterMedium font-medium text-[#000] text-[20px]`}>Merci d'entrer vos informations de connexion</P>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                    <label className={formik.errors.Email && formik.errors.Email && "text-[#F87171]"}>Email</label>
                    <div className={`${formik.errors.Email && formik.errors.Email ? "text-[#F87171] border border-[#F87171] " : "text-black border-[#E4E4E7]"} w-[520px] p-[16px] border rounded-[12px] ${activeField == "email" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                        <Input onchange={formik.handleChange} value={formik.values.Email} type={'email'} name="Email" placeholder={formik.errors.Email && formik.errors.Email ? "gggggggggg" : 'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} />
                    </div>

                    <label className={formik.errors.Email && formik.errors.password && "text-[#F87171]"}>Mot de passe</label>
                    <div className={`${formik.errors.Email && formik.errors.password ? "text-[#F87171] border border-[#F87171] " : "text-black border-[#E4E4E7]"} w-[520px] p-[16px] border rounded-[12px] ${activeField == "Motdepasse" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                        <Input onchange={formik.handleChange} value={formik.values.password} name="password" placeholder={'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('Motdepasse')} onBlur={() => setActiveField(null)} />

                    </div>
                    <div className="w-full flex flex-col gap-3 text-center">
                        <Link className="font-InterLight font-normal text-[16px] " to={'/ForgettonPassword'}>
                            Mot de passe oublié ?
                        </Link>
                        <Button type={'submit'} className={'px-[40px] py-[12px] bg-[#4763E4] rounded-[12px] text-[16px] text-white font-InterMedium'}>Se connecter</Button>
                        <P>
                            Vous n’avez pas de compte ? <Link className="text-[#4763E4] ">Créer un compte</Link>
                        </P>
                    </div>

                </form>
            </div>
        </div>
    )
}
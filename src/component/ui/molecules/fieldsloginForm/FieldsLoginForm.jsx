// import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { useState } from "react";
import Icon from "../../atom/icon/Icon";
import Input from "../../atom/input/Input";
import P from "../../atom/p/P";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../atom/button/Button";
import { Link } from "react-router-dom";

export default function FieldsLoginForm() {
    // const [b , setB]=useLocalStorage("b",'j')
    const [activeField, setActiveField] = useState(null)
    function h() {

    }
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
      alert(JSON.stringify(values, null, 2));
        }
    });
    console.log(formik.errors.Email, formik.errors.Email);

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
                    <div className={`${formik.errors.Email && formik.errors.Email ? "text-[#F87171] border border-[#F87171] ": "text-black border-[#E4E4E7]"} w-[520px] p-[16px] border rounded-[12px] ${activeField == "email" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                        <Input onchange={formik.handleChange} value={formik.values.Email} type={'email'} name="Email" placeholder={formik.errors.Email && formik.errors.Email ? "gggggggggg" : 'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} />
                    </div>

                    <label className={formik.errors.Email && formik.errors.password && "text-[#F87171]"}>Mot de passe</label>
                    <div className={`${formik.errors.Email && formik.errors.password ? "text-[#F87171] border border-[#F87171] ": "text-black border-[#E4E4E7]"} w-[520px] p-[16px] border rounded-[12px] ${activeField == "Motdepasse" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                        <Input onchange={formik.handleChange} value={formik.values.password} name="password" placeholder={'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('Motdepasse')} onBlur={() => setActiveField(null)} />

                    </div>
                    <div className="w-full flex flex-col gap-3 text-center">
                        <Link className="font-InterMedium font-normal text-[16px] ">
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
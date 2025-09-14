import { Link } from "react-router-dom";
import Button from "../../atom/button/Button";
import Icon from "../../atom/icon/Icon";
import Input from "../../atom/input/Input";
import P from "../../atom/p/P";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
export default function FieldForgettonAcount() {
    const [mode , setMode] = useState('email')
    const [activeField, setActiveField] = useState(null)

    const formik = useFormik({
        initialValues: {
            Email: ""
        },
        validationSchema: Yup.object({
            Email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
        })
    })
    return (
        <div className="flex flex-col gap-4 items-center">
            <div>
                <Icon name={'logo2'} />
            </div>
            <div className="grid gap-2">
                <label className={`${formik.errors.Email && formik.errors.Email && "text-[#F87171]"} text-[16px] font-normal font-InterLight`}>Adresse e-mail</label>
                <div className={`${formik.errors.Email && formik.errors.Email ? "text-[#F87171] border border-[#F87171] " : "text-black border-[#E4E4E7]"} w-[520px] px-[16px] py-[12px] border rounded-[12px] ${activeField == "email" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                    <Input onchange={formik.handleChange} value={formik.values.Email} type={'email'} name="Email" placeholder={formik.errors.Email && formik.errors.Email ? "gggggggggg" : 'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} />
                </div>
            </div>
            <div className="w-full flex flex-col gap-3 text-center">
                <Button type={'submit'} className={'px-[40px] py-[12px] bg-[#4763E4] rounded-[12px] text-[16px] text-white font-InterMedium'}>Se connecter</Button>
                <P>
                    <Link className="text-[#4763E4] " to={'/'}>Retour à la page connexion</Link>
                </P>
            </div>
        </div>
    )
}
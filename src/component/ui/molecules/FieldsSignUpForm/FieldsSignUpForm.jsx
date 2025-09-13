import { useState } from "react";
import Icon from "../../atom/icon/Icon";
import Input from "../../atom/input/Input";
import P from "../../atom/p/P";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../atom/button/Button";
import { Link } from "react-router-dom";
import Span from "../../atom/span/Span";

export default function FieldsSignUpForm() {
    // const [b , setB]=useLocalStorage("b",'j')
    const [activeField, setActiveField] = useState(null)
    function h() {

    }
    const formik = useFormik({
        initialValues: {
            Email: "",
            password: "",
            checkbox: false,
        },
        validationSchema: Yup.object({
            Email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            checkbox: Yup.boolean()
                .oneOf([true], "You must accept the terms and conditions")
        }),
        onSubmit: (e, values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    console.log(formik.errors.Email, formik.errors.Email);

    return (
        <div className=" flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-1 items-center">
                <Icon name={'logo2'} />
                {/* <div className="w-[200px] h-[44px] bg-black"></div> */}
                <P className={`font-InterMedium font-medium text-[#000] text-[20px]`}>Merci d'entrer vos informations de connexion</P>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className={`${formik.errors.Email && formik.errors.Email && "text-[#F87171]"} text-[16px] font-normal font-InterLight`}>Adresse e-mail</label>
                        <div className={`${formik.errors.Email && formik.errors.Email ? "text-[#F87171] border border-[#F87171] " : "text-black border-[#E4E4E7]"} w-[520px] px-[16px] py-[12px] border rounded-[12px] ${activeField == "email" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                            <Input onchange={formik.handleChange} value={formik.values.Email} type={'email'} name="Email" placeholder={formik.errors.Email && formik.errors.Email ? "gggggggggg" : 'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} />
                        </div>
                    </div>

                    <div>
                        <label className={`${formik.errors.Email && formik.errors.Email && "text-[#F87171]"} text-[16px] font-normal font-InterLight`}>Numéro de téléphone</label>
                        <div className={`${formik.errors.Email && formik.errors.password ? "text-[#F87171] border border-[#F87171] " : "text-black border-[#E4E4E7]"} w-[520px] px-[16px] py-[12px] border rounded-[12px] ${activeField == "Motdepasse" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                            <Input onchange={formik.handleChange} value={formik.values.password} name="password" placeholder={'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('Motdepasse')} onBlur={() => setActiveField(null)} />
                        </div>
                    </div>

                    <div>
                        <label className={`${formik.errors.Email && formik.errors.Email && "text-[#F87171]"} text-[16px] font-normal font-InterLight`}>Mot de passe</label>
                        <div className={`${formik.errors.Email && formik.errors.password ? "text-[#F87171] border border-[#F87171] " : "text-black border-[#E4E4E7]"} w-[520px] px-[16px] py-[12px] border rounded-[12px] ${activeField == "Motdepasse" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                            <Input onchange={formik.handleChange} value={formik.values.password} name="password" placeholder={'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('Motdepasse')} onBlur={() => setActiveField(null)} />

                        </div>
                    </div>

                    <div>
                        <label className={`${formik.errors.Email && formik.errors.Email && "text-[#F87171]"} text-[16px] font-normal font-InterLight`}>Confirmer votre mot de passe</label>
                        <div className={`${formik.errors.Email && formik.errors.password ? "text-[#F87171] border border-[#F87171] " : "text-black border-[#E4E4E7]"} w-[520px] px-[16px] py-[12px] border rounded-[12px] ${activeField == "Motdepasse" ? "border-[#5C73DB]" : "border-[#E4E4E7]"}`}>
                            <Input onchange={formik.handleChange} value={formik.values.password} name="password" placeholder={'johndoe@gmail.com'} className={`outline-none border-none w-full`} onFocus={() => setActiveField('Motdepasse')} onBlur={() => setActiveField(null)} />

                        </div>
                    </div>

                    <div className="flex w-full gap-3">
                        <Input id={'checkbox'} type="checkbox" onchange={formik.handleChange} value={formik.values.checkbox} checked={formik.values.checkbox} name="checkbox" placeholder={'johndoe@gmail.com'} className={`w-[16px]`} onFocus={() => setActiveField('Motdepasse')} onBlur={() => setActiveField(null)} />
                        <label htmlFor="checkbox" className={`${formik?.errors?.checkbox && "text-[#F87171]"} text-[16px] font-normal font-InterLight text-[#000] `}>J'accepte <Span className={'text-[#4763E4] '}>les termes et les conditions d'utilisation. </Span></label>

                    </div>

                    <div className="w-full flex flex-col gap-3 text-center">
                        <Button type={'submit'} className={'px-[40px] py-[12px] bg-[#4763E4] rounded-[12px] text-[16px] text-white font-InterMedium'}>Se connecter</Button>
                        <P>
                            Vous possedez déjà un compte ?  <Link className="text-[#4763E4] " to={'/'}>Se connecterpte</Link>
                        </P>
                    </div>

                </form>
            </div>
        </div>
    )
}


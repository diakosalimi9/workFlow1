import Modal from 'react-modal';
import Button from '../../atom/button/Button';
import { useEdit } from '../../../../context/EditItemContext';
import H2 from '../../atom/h2/H2';
import Input from '../../atom/input/Input';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import { pays } from '../../../../Chore/Array/Array';
import { useEffect } from 'react';
export default function ModaleEdit() {
    const { modaleEdit, setModaleEdit } = useEdit()
    const [pay, setPay] = useLocalStorage("pays",)
    const [methodes, setmethodes] = useLocalStorage("methodes",)
    const [citys, setCitys] = useLocalStorage("citys",)

    const formik = useFormik({
        initialValues: {
            Dragonfly: modaleEdit?.fields?.Dragonfly || "",
            CodeISO: modaleEdit?.fields?.CodeISO || null,
            Description: modaleEdit?.fields?.Description || 'd',
        },
        validationSchema: Yup.object({


        }),
        enableReinitialize: true,
        onSubmit: (values) => {

            if (modaleEdit.title === "pays") {
                console.log(pay);
                console.log(modaleEdit.fields.id);

                const item = pay.find((i) => i.id === modaleEdit.fields.id)
                const newL = pay.filter((it) => it.id !== modaleEdit.fields.id)
                console.log(item);
                console.log(newL);
                location.reload()
                item ? setPay([{ ...values }, ...newL]) : setPay(prev => ([{ ...values, id: Date.now() }, ...prev]))
            } else if (modaleEdit.title === "méthodes d'évaluation") {

                const item = methodes.find((i) => i.id === modaleEdit.fields.id)
                const newL = methodes.filter((it) => it.id !== modaleEdit.fields.id)
                location.reload()
                item ? setmethodes([{ ...values }, ...newL]) : setmethodes(prev => ([{ ...values, id: Date.now() }, ...prev]))

            } else if (modaleEdit.title === "citys") {


                const item = citys.find((i) => i.id === modaleEdit.fields.id)
                const newL = citys.filter((it) => it.id !== modaleEdit.fields.id)
                location.reload()
                item ? setCitys([{ ...values }, ...newL]) : setCitys(prev => ([{ ...values, id: Date.now() }, ...prev]))

            }
        }
    });
    useEffect(() => {
        if (modaleEdit?.fields) {
            formik.setValues({
                Dragonfly: modaleEdit?.fields?.Dragonfly || "",
                CodeISO: modaleEdit?.fields?.CodeISO || null,
                Description: modaleEdit?.fields?.Description || 'd',
            })
        } else {
        }
    }, [modaleEdit.fields])
    return (
        <div className="-z-50  overflow-hidden">

            <Modal
                isOpen={modaleEdit.isopen}
                onRequestClose={() => setModaleEdit({ isopen: false, fields: {}, title: null })}
                className={'bg-[#FAFAFA] mr-[3%] w-[80%] rounded-[12px]  m-auto'}
                style={{
                    overlay: {
                        backgroundColor: '#00000059',
                        display: 'flex', justifyContent: 'center'
                    },
                    content: {
                        color: '#000'
                    }
                }}
            >
                <div className="flex flex-col py-[20px] px-7">
                    <div>
                        <H2 className={'font-InterMedium font-medium text-[20px] pb-10'}>
                            Enregistrement d'une {modaleEdit.title ? modaleEdit.title : "...."}
                        </H2>
                    </div>

                    <div>
                        <form onSubmit={formik.handleSubmit} action="" className='flex flex-col gap-3'>
                            {typeof modaleEdit?.fields?.Dragonfly !== "undefined" && (
                                <div className='flex flex-col gap-2'>
                                    <label className='font-InterRegular font-normal text-[16px]' htmlFor="">Libellé</label>
                                    <div className="w-full border border-[#4763E480] rounded-[10px] flex items-center gap-3 py-3 px-4">
                                        <Input onchange={formik.handleChange} value={formik.values.Dragonfly} type={'text'} name="Dragonfly" placeholder={"...@gmail.com"} className="placeholder:text-[#A1A1AA] outline-none border-none w-full bg-transparent font-InterRegular font-normal text-[14px]" />

                                    </div>
                                </div>
                            )}
                            {console.log(modaleEdit?.fields?.CodeISO)}
                            {typeof modaleEdit?.fields?.CodeISO !== "undefined" && typeof modaleEdit?.fields?.CodeISO !== "null" &&(
                                <div className='flex flex-col gap-2'>
                                    <label className='font-InterRegular font-normal text-[16px]' htmlFor="">Code ISO*</label>
                                    <div className="w-full border border-[#4763E480] rounded-[10px] flex items-center gap-3 py-3 px-4">
                                        <Input onchange={formik.handleChange} value={formik.values.CodeISO} type={'text'} name="CodeISO" placeholder={"...@gmail.com"} className="placeholder:text-[#A1A1AA] outline-none border-none w-full bg-transparent font-InterRegular font-normal text-[14px]" />

                                    </div>
                                </div>
                            )}
                            {typeof modaleEdit?.fields?.Description !== "undefined" && (
                                <div className='flex flex-col gap-2'>
                                    <label className='font-InterRegular font-normal text-[16px]' htmlFor="">Description</label>
                                    <div className="w-full h-[200px] border border-[#4763E480] rounded-[10px] flex items-center gap-3 py-3 px-4" >

                                        <textarea ROWS="7" COLS="410" className='outline-none bg-transparent resize-none' onChange={formik.handleChange} name="Description" value={formik.values.Description}>

                                        </textarea>
                                    </div>
                                </div>
                            )}


                            <div className='flex gap-2 mt-8'>

                                <Button className={'bg-[#4763E4] px-6 py-2 text-white rounded-[10px]'} type={'submit'} >Enregistrer</Button>
                                <Button type={'button'} className={'border border-[#D4D4D8] px-8 py-2 text-[#27272A] rounded-[10px]'}>Annuler</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
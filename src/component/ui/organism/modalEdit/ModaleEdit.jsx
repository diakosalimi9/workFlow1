import Modal from 'react-modal';
import Button from '../../atom/button/Button';
import { useEdit } from '../../../../context/EditItemContext';
import H2 from '../../atom/h2/H2';
import Input from '../../atom/input/Input';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from 'react';
export default function ModaleEdit() {
    const { modaleEdit, setModaleEdit } = useEdit()


    const formik = useFormik({
        initialValues: {
            Email: modaleEdit.fields.Dragonfly ? "lll" : "",

            password: "",


        },
        validationSchema: Yup.object({


        }),
        onSubmit: (values) => {
            console.log(modaleEdit.fields.Dragonfly);
            console.log(values);

        }
    });
    return (
        <div className="-z-50  overflow-hidden">

            <Modal
                isOpen={modaleEdit.isopen}
                onRequestClose={() => setModaleEdit({ isopen: false, Fields: {} })}
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
                        <form onSubmit={formik?.handleSubmit} action="" className='flex flex-col gap-3'>
                            {typeof modaleEdit?.fields?.Dragonfly !== "undefined" && (
                                <div className='flex flex-col gap-2'>
                                    <label className='font-InterRegular font-normal text-[16px]' htmlFor="">Libellé</label>
                                    <div className="w-full border border-[#4763E480] rounded-[10px] flex items-center gap-3 py-3 px-4">
                                        <Input onchange={formik?.handleChange} value={formik?.values.Email} type={'email'} name="Email" placeholder={"...@gmail.com"} className="placeholder:text-[#A1A1AA] outline-none border-none w-full bg-transparent font-InterRegular font-normal text-[14px]" />

                                    </div>
                                </div>
                            )}
                            {typeof modaleEdit?.fields?.CodeISO !== "undefined" && (
                                <div className='flex flex-col gap-2'>
                                    <label className='font-InterRegular font-normal text-[16px]' htmlFor="">Code ISO*</label>
                                    <div className="w-full border border-[#4763E480] rounded-[10px] flex items-center gap-3 py-3 px-4">
                                        <Input placeholder={"...@gmail.com"} className="placeholder:text-[#A1A1AA] outline-none border-none w-full bg-transparent font-InterRegular font-normal text-[14px]" />

                                    </div>
                                </div>
                            )}
                            {typeof modaleEdit?.fields?.Description !== "undefined" && (
                                <div className='flex flex-col gap-2'>
                                    <label className='font-InterRegular font-normal text-[16px]' htmlFor="">Description</label>
                                    <div className="w-full h-[200px] border border-[#4763E480] rounded-[10px] flex items-center gap-3 py-3 px-4">
                                        <Input placeholder={"...@gmail.com"} className="bg-transparent placeholder:text-[#A1A1AA] h-full outline-none border-none w-full font-InterRegular font-normal text-[14px]" />

                                    </div>
                                </div>
                            )}


                            <div className='flex gap-2 mt-8'>//TODO/------

                                <Button className={'bg-[#4763E4] px-6 py-2 text-white rounded-[10px]'} type={'submit'} >Enregistrer</Button>
                                <Button className={'border border-[#D4D4D8] px-8 py-2 text-[#27272A] rounded-[10px]'}>Annuler</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
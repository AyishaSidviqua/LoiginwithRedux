import React, { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { DataTable } from 'primereact/datatable'
import { Column } from "primereact/column";
import "../PreRegister/PreRegister.css"
import Second from "../../props/second";
import Todo from "../../Components/state/todo";
import { useDispatch, useSelector } from "react-redux";
import { PreMiddleWareData } from "./store/preMiddleWare";
import { AppDispatch } from "../../redux/store";

interface IState {
    showModule: {
        module: boolean
    }
    selectedProducts: {
        select: boolean;
    };
    activeTabs: {
        active: string;
    };
    showData: {
        show: string;
    };
}

const PreRegister: React.FC = () => {
    // const [data] = useState<MyData[]>(initialData);

    const [state, setState] = useState<IState>({
        showModule: {
            module: false
        },
        selectedProducts: {
            select: false
        },
        activeTabs: {
            active: 'postRegister'
        },
        showData: {
            show: "postRegister"
        }
    });

    const handle = () => {
        setState(prevState => ({
            ...prevState,
            showModule: {
                module: !prevState.showModule.module
            }
        }));
    }
    const handleSelectionChange = (e: { value: boolean }) => {
        setState((prevState) => ({
            ...prevState,
            selectedProducts: {
                select: e.value,
            },
        }));
    };
    const dispatch:AppDispatch = useDispatch()

    const { data, loading } = useSelector(
        ({ preReducer }: { preReducer: any }) => {
            console.log(preReducer, "sdfghjk");
            return {
                loading: preReducer?.loading,
                data: preReducer?.preData,
            };
        }
    );

    // const mydata = data.map((item:any)  => {
    //     return item;
    // });

    console.log(data,"dataaaa",loading);
    
    useEffect(() => {
        dispatch(PreMiddleWareData());
    }, [])

    return (
        <div className="head">
            <div className="grid">
                <div className="col">
                    <div className="buttn">
                        <Button
                            className="btn"
                            onClick={handle}>
                            <i className="pi pi-plus" />
                        </Button>
                        {state.showModule.module && <Button label="Add" className="btns" />}
                        {state.showModule.module && <Button label="Import file" className="btns" />}
                    </div>
                </div>
                <div className="col">
                    <div className="search">
                        <Button
                            className="download"
                        >
                            <i className="pi pi-download" />
                        </Button>
                        <InputText
                            className="input" >
                            <i className="pi pi-search" />
                        </InputText>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col">
                    <p>Pre Registration</p>
                    <div className="text-center font-bold" style={{ backgroundColor: '#0b1b6e', height: 1 }} />
                </div>
            </div>
            <div className="grid">
                <div className="col">

                    <DataTable
                        value={data}
                    // value={data}
                    // showGridlines
                    // tableStyle={{ minWidth: "50rem" }}
                    // selection={state.selectedProducts.select}
                    onSelectionChange={handleSelectionChange}
                    // selectionMode="checkbox"
                    >
                        {/* <Column field="select" header="" selectionMode="multiple"></Column> */}
                        <Column field="RegistrationNo" header="Registration No"></Column>
                        <Column field="TeamLeadName" header="Team Lead Name"></Column>
                        <Column field="ProjectTitle" header="Project Title"></Column>
                        <Column field="EmailId" header="Email ID"></Column>
                        <Column field="Contact" header="Contact"></Column>
                        <Column field="Teamsize" header="Team Size"></Column>
                    </DataTable>
                </div>
            </div>
            <Second />
            <Todo />



        </div >
    )
}
export default PreRegister
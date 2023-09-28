import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import "../PostRegister/PostRegister.css"
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { PostMiddleWareData } from "./store/PostMiddleWare";

interface IState {
    selectedProducts: {
        select: boolean;
    };
    activeTabs: {
        postRegister: string;
        selected: string;
        waiting: string;
        rejected: string;
        bussinessData: string
    }

}
const PostRegister: React.FC = () => {
    const [state, setState] = useState<IState>({
        selectedProducts: {
            select: false
        },
        activeTabs: {
            postRegister: "postRegister",
            selected: 'selected',
            waiting: 'waiting',
            rejected: 'rejected',
            bussinessData: 'businessData'
        }
    })
    const dispatch: AppDispatch = useDispatch()
    const { data, loading } = useSelector(
        ({ postReducer }: { postReducer: any }) => {
            console.log(postReducer, "sdfghjk");
            return {
                loading: postReducer?.loading,
                data: postReducer?.postData,
            };
        }
    );
    console.log(data, "dataaa[]", loading);
    const handlePost = () => {
        if (state.activeTabs.postRegister == "postRegister") {
            dispatch(PostMiddleWareData())
        }
        else {
            return null
        }
    }
    useEffect(() => {
        handlePost()
        // dispatch(PostMiddleWareData())
    }, [])

    return (
        <div>
            <div className="grid">
                <div className="col">
                    <Button className="btns" label="PostRegister"
                     onClick={() => {
                        setState(prevState => ({
                          ...prevState,
                          selectedProducts: { select: false }, // Reset the selection
                          activeTabs: { ...prevState.activeTabs }
                        }));
                      }}
                    >
                    </Button>
                </div>
                <div className="col">
                    <Button className="btns" label="Selected">
                    </Button>
                </div>
                <div className="col">
                    <Button className="btns" label="Waiting">
                    </Button>
                </div>
                <div className="col">
                    <Button className="btns" label="Rejected">
                    </Button>
                </div>
                <div className="col">
                    <Button className="btns" label="BussinessIdea">
                    </Button>
                </div>

            </div>
            {state.activeTabs.postRegister === "postRegister" && (
            <DataTable
                value={data}
            >
                <Column field="RegistrationNo" header="Registration No"></Column>
                <Column field="TeamLeadName" header="Team Lead Name"></Column>
                <Column field="ProjectTitle" header="Project Title"></Column>
                <Column field="EmailId" header="Email ID"></Column>
                <Column field="Contact" header="Contact"></Column>
                <Column field="Teamsize" header="Team Size"></Column>
            </DataTable>)
            }
        </div>
    )
}
export default PostRegister
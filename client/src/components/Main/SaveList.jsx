import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHttp } from "../hooks/http.hook";
import { openCloseAlertAction } from "../../store/Alert/actions";

export default function SaveList() {
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    const { request } = useHttp();

    const SaveToDB = async () => {
        try {
            const data = await request('/api/lists/save', 'POST', { ...list });
            dispatch(openCloseAlertAction({ open: true, text: data.message, severity: 'success' }));
            console.log("Data: ", data);
        } catch (e) {
            dispatch(openCloseAlertAction({ open: true, text: "Не удалось сохранить список", severity: 'success' }));
        }
    }

    return (
        <Button sx={{ width: 1 }} onClick={SaveToDB} variant='contained'>Save to DB</Button>
    )
}
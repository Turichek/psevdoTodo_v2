import { Grid } from '@mui/material';
import ToPDF from "../PDF/ToPDF";
import ToClipboard from "./ToClipboard";
import FromJson from "./FromJson";
import ParsePsevdoCode from '../ParsePsevdoCode/ParsePsevdoCode';
import React from "react";
import Logout from './Logout';
import SaveList from './SaveList';

export default function FunctionalButtons() {
    return (
        <Grid sx={{ mt: '2%' }} container columns={{ xl: 13 }} justifyContent={'space-around'}>
            <Grid item xl={2}>
                <ParsePsevdoCode />
            </Grid>
            <Grid item xl={2}>
                <ToPDF />
            </Grid>
            <Grid item xl={2}>
                <ToClipboard />
            </Grid>
            <Grid item xl={2}>
                <FromJson />
            </Grid>
            <Grid item xl={2}>
                <SaveList />
            </Grid>
            <Grid item xl={2}>
                <Logout />
            </Grid>
        </Grid>
    )
}
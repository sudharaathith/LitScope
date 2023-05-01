import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import { IonIcon, } from "@ionic/react";
import { thumbsUpSharp, bug } from 'ionicons/icons';
import {
  Select,
  Option,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import SearchApi from "./SearchApi";
import axios from "axios";
import ReactLoading from "react-loading";

function CreateForm(props) {
  let [domainName, setDomainName] = useState("");
  let [mode, setMode] = useState("");
  let [search, setSearch] = useState({});
  let [dialogOpen, setDialogOpen] = useState(false);
  let [dialogMode, setDialogMode] = useState(0);

  return (
    <div className="flex flex-col justify-center mt-3">
      <div className="flex flex-row  items-center">
        <div className="ml-10 w-1/2  items-center">Domine name</div>
        <div className=" absolute left-60">
          <InputBox
            className=""
            onChange={(val) => {
              setDomainName(val);
            }}
            text="domain name"
          />
        </div>
      </div>
      <div className="flex flex-row  mt-3">
        <div className="ml-10 items-center">mode</div>
        <div className=" absolute left-60">
          <Select
            label="mode"
            onChange={(e) => {
              setMode(e);
            }}
          >
            <Option value="web">web</Option>
            <Option value="api">api</Option>
          </Select>
        </div>
      </div>
      <div className=" mt-9">
        {mode === "api" ? (
          <SearchApi
            onChange={(val) => {
              setSearch(val);
            }}
          />
        ) : null}
      </div>
      <div className="ml-8 mt-10">
        {!(mode === "") ? (
          <Button
            onClick={() => {
              let data = {
                domine_name: domainName,
                mode: mode,
                search: search,
              };

              const headers = {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=UTF-8",
              };

              setDialogOpen(true);
              axios
                .post("http://127.0.0.1:8000/api/domain/create/", data, headers)
                .then((res) => {
                  console.log("sucess");
                  setDialogMode(1);
                  setTimeout(() => {
                    setDialogOpen(false);
                  }, 1000);
                })
                .catch(() => {
                  setDialogMode(2);
                  setTimeout(() => {
                    setDialogOpen(false);
                  }, 1000);
                });
            }}
          >
            Save
          </Button>
        ) : null}
      </div>
      <Dialog open={dialogOpen}>
        {dialogMode === 0 ? (
          <DialogBody className="flex flex-col items-center">
            <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
            Trying to create a new domain
          </DialogBody>
        ) : dialogMode === 1 ? (
          <DialogBody className="flex flex-col items-center  text-green-600">
          <IonIcon icon={thumbsUpSharp} />
            Saved successfully
          </DialogBody>
        ) : (
          <DialogBody className="flex flex-col items-center">
          <IonIcon icon={bug} />
          Error</DialogBody>
        )}
      </Dialog>
    </div>
  );
}

export default CreateForm;

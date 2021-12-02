import React, { useState, useEffect } from "react";
import { Menu } from "react-feather";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { ThemeProvider, createTheme } from "@mui/material";

const Header = ({ open, setOpen, firebaseApp }) => {
  const db = getFirestore(firebaseApp);
  const queryStatusSnapshot = doc(db, "globals", "status");
  const queryTimingSnapshot = doc(db, "globals", "timing");
  const [checked, setChecked] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  //Theme DatePicker
  const color = "#9CA3AF";
  const materialTheme = createTheme({
    palette: {
      primary: {
        main: "#A78BFA",
        contrastText: "#fff",
      },
    },
  });
  useEffect(() => {
    async function fetchData() {
      const docSnap = await getDoc(queryStatusSnapshot);
      const doctimingSnap = await getDoc(queryTimingSnapshot);
      if (doctimingSnap.exists) {
        setStartDate(new Date(doctimingSnap.data().start.toDate()));
        setEndDate(new Date(doctimingSnap.data().end.toDate()));
      }
      if (docSnap.exists) {
        setChecked(docSnap.data().open);
      }
    }
    fetchData();
  }, []);

  const shopUpdate = async (data) => {
    await setDoc(queryStatusSnapshot, { open: data }, { merge: true });
    setChecked(data);
  };

  const startTimeUpdate = async (data) => {
    await setDoc(queryTimingSnapshot, { start: data }, { merge: true });
    setStartDate(data);
  };

  const endTimeUpdate = async (data) => {
    await setDoc(queryTimingSnapshot, { end: data }, { merge: true });
    setEndDate(data);
  };

  return (
    <div className="h-20 px-6 shadow-lg w-full flex items-center justify-between top-0 sticky mb-8 z-10 bg-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center justify-center">
        <div className="mr-3 hidden lg:flex">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    {...props}
                    sx={{
                      svg: { color },
                      input: { color },
                      label: { color },
                    }}
                  />
                )}
                label="Start Time"
                value={startDate}
                onChange={(newValue) => {
                  startTimeUpdate(newValue);
                }}
              />
            </ThemeProvider>
          </LocalizationProvider>
        </div>
        <div className="mr-3 hidden lg:flex">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    {...props}
                    sx={{
                      svg: { color },
                      input: { color },
                      label: { color },
                      focus: { color },
                    }}
                  />
                )}
                label="End Time"
                value={endDate}
                onChange={(newValue) => {
                  endTimeUpdate(newValue);
                }}
              />
            </ThemeProvider>
          </LocalizationProvider>
        </div>
        <label
          for="toggleB"
          className="flex items-center cursor-pointer lg:mr-0 mr-4"
        >
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              class="sr-only"
              onChange={(e) => {
                shopUpdate(e.target.checked);
              }}
            />
            <div
              className={`block ${
                checked
                  ? "bg-purple-400 transition duration-100 ease-in"
                  : "bg-gray-400"
              } w-14 h-8 rounded-full`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                checked ? "transform translate-x-full" : ""
              }`}
            ></div>
          </div>
        </label>
        <Menu
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Grid, ShoppingCart } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { ThemeProvider, createTheme } from "@mui/material";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const SideBar = ({ open, firebaseApp }) => {
  const db = getFirestore(firebaseApp);
  const queryTimingSnapshot = doc(db, "globals", "timing");
  const location = useLocation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
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
      const doctimingSnap = await getDoc(queryTimingSnapshot);
      if (doctimingSnap.exists) {
        setStartDate(new Date(doctimingSnap.data().start.toDate()));
        setEndDate(new Date(doctimingSnap.data().end.toDate()));
      }
    }
    fetchData();
  }, []);
  const startTimeUpdate = async (data) => {
    await setDoc(queryTimingSnapshot, { start: data }, { merge: true });
    setStartDate(data);
  };

  const endTimeUpdate = async (data) => {
    await setDoc(queryTimingSnapshot, { end: data }, { merge: true });
    setEndDate(data);
  };
  return (
    <div
      className={`md:w-2/5 lg:w-1/5 md:flex flex-col align-middle h-screen md:top-0 md:sticky px-6 shadow-lg md:transform-none ${
        open
          ? "fixed left-0 top-0 transform translate-x-0 z-20 bg-white"
          : "relative transform -translate-x-full hidden"
      }`}
    >
      <h1 className="text-3xl text-purple-400 font-extrabold py-6 px-3 mb-8">
        Food App
      </h1>
      <div>
        <ul>
          <NavLink
            to="/dashboard"
            className={(navData) =>
              navData.isActive ? "text-purple-400" : "text-gray-400"
            }
          >
            <li className="py-3 px-3 text-xl flex align-middle items-center mb-2 relative">
              {location.pathname === "/dashboard" ? (
                <div className="bg-purple-400 h-8 w-8 rounded-full absolute left-0 transform -translate-x-12 "></div>
              ) : (
                ""
              )}
              <Grid className="mr-4" />
              Dashboard
            </li>
          </NavLink>
          <NavLink
            to="/products"
            className={(navData) =>
              navData.isActive ? "text-purple-400" : "text-gray-400"
            }
          >
            <li className="py-3 px-3 text-xl flex align-middle items-center mb-2 relative">
              {location.pathname === "/products" ? (
                <div className="bg-purple-400 h-8 w-8 rounded-full absolute left-0 transform -translate-x-12"></div>
              ) : (
                ""
              )}
              <ShoppingCart className="mr-4" />
              Products
            </li>
          </NavLink>
          <div className="mb-3 lg:hidden">
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
          <div className="mb-3 lg:hidden">
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
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./bookingSlice";

const appStore = configureStore({
  reducer: {
    bookings: bookingSlice,
  },
});

export default appStore;

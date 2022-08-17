import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "e3318c50ecd449b193008c5ef67905b8";
const token =
  "006e3318c50ecd449b193008c5ef67905b8IADgYAArrsDv/OIT4kunYSUQFDfexZxX8LwG6tmJhmu95mTNKL8AAAAAEACaVovP9UT+YgEAAQD2RP5i";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";

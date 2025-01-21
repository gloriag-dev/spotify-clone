import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type Store = {
  userId?: string;
  updateUserId: (id: string) => void;
  resetUserId: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  resetAuthToken: () => void;
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
  toggleLoader: () => void;
};

const useCoreStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        userId: undefined,
        updateUserId: (id) => set(() => ({ userId: id }), false, "userId"),
        resetUserId: () =>
          set(() => ({ userId: undefined }), false, "resetUserId"),
        isAuthenticated: false,
        setIsAuthenticated: () =>
          set(() => ({ isAuthenticated: true }), false, "isAuthenticated"),
        resetAuthToken: () =>
          set(() => ({ isAuthenticated: false }), false, "resetAuth"),
        isLoading: false,
        showLoader: () => set(() => ({ isLoading: true }), false, "showLoader"),
        hideLoader: () =>
          set(() => ({ isLoading: false }), false, "hideLoader"),
        toggleLoader: () =>
          set(() => ({ isLoading: !get().isLoading }), false, "toggleLoader"),
      }),
      {
        name: "coreStore",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export { useCoreStore };

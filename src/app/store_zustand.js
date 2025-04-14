import { create } from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  // Initial state combined from slices
  header: {
    pageTitle: "Home",
    noOfNotifications: 15,
    newNotificationMessage: "",
    newNotificationStatus: 1,
  },
  modal: {
    title: "",
    isOpen: false,
    bodyType: "",
    size: "md", // Default size
    extraObject: {},
  },
  rightDrawer: {
    header: "",
    isOpen: false,
    bodyType: "",
    extraObject: {},
  },
  lead: {
    isLoading: false,
    leads: [],
  },

  // Header actions
  setPageTitle: (title) =>
    set((state) => ({ header: { ...state.header, pageTitle: title } })),
  removeNotificationMessage: () =>
    set((state) => ({
      header: { ...state.header, newNotificationMessage: "" },
    })),
  showNotification: ({ message, status }) =>
    set((state) => ({
      header: {
        ...state.header,
        newNotificationMessage: message,
        newNotificationStatus: status,
      },
    })),

  // Modal actions
  openModal: ({ title, bodyType, extraObject, size }) =>
    set((state) => ({
      modal: {
        ...state.modal,
        isOpen: true,
        title,
        bodyType,
        size: size || "md",
        extraObject,
      },
    })),
  closeModal: () =>
    set((state) => ({
      modal: {
        ...state.modal,
        isOpen: false,
        bodyType: "",
        title: "",
        extraObject: {},
      },
    })),

  // Right Drawer actions
  openRightDrawer: ({ header, bodyType, extraObject }) =>
    set((state) => ({
      rightDrawer: {
        ...state.rightDrawer,
        isOpen: true,
        header,
        bodyType,
        extraObject,
      },
    })),
  closeRightDrawer: () =>
    set((state) => ({
      rightDrawer: {
        ...state.rightDrawer,
        isOpen: false,
        bodyType: "",
        header: "",
        extraObject: {},
      },
    })),

  // Lead actions
  addNewLead: (newLeadObj) =>
    set((state) => ({
      lead: { ...state.lead, leads: [...state.lead.leads, newLeadObj] },
    })),
  deleteLead: (index) =>
    set((state) => {
      const newLeads = [...state.lead.leads];
      newLeads.splice(index, 1);
      return { lead: { ...state.lead, leads: newLeads } };
    }),
  getLeadsContent: async () => {
    set((state) => ({ lead: { ...state.lead, isLoading: true } }));
    try {
      const response = await axios.get("/api/users?page=2"); // Assuming the API endpoint remains the same
      set((state) => ({
        lead: { ...state.lead, leads: response.data.data, isLoading: false },
      }));
    } catch (error) {
      console.error("Failed to fetch leads:", error);
      set((state) => ({ lead: { ...state.lead, isLoading: false } }));
      // Optionally, handle the error state in the store
    }
  },
}));

export default useStore;

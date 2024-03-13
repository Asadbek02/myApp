import {createRouter, createWebHistory} from "vue-router";
import routes from "@/router/routes.js";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "bg-gray-900 text-white",
    routes
});
export default router;

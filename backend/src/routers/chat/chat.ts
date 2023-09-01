import { Router } from "express";

import { userAuth } from "../../middlewares/auth-middleware";
import { get_chat_thread, get_inbox, get_messages, get_unread_msg_count, send_message } from "../../controllers/chat.controller";

const router = Router();

router
    .route("/threads/:thread_id")
    .get(userAuth, get_messages)
    .post(userAuth, send_message)

router
    .route("/inbox")
    .get(userAuth, get_inbox)

router
    .route("/unread_msg_count")
    .get(userAuth, get_unread_msg_count)

router
    .route("/:ad_id")
    .get(userAuth, get_chat_thread)

export default router;
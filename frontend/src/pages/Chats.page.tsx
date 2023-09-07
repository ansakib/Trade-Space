import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";


import Layout from "../layout/Layout";


import ChatHeader from "../components/Chats/ChatHeader";
import Divider from "../components/Chats/Divider";
import ChatBox from "../components/Chats/ChatBox";
import InputBox from "../components/Chats/InputBox";


import { MessageType } from "../services/Chat.service";



const GetChats = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [messages, setMessages] = useState<MessageType[]>([]);

    // const handleSendMessage = (message: MessageType) => {
    //     setMessages([...messages, message]);
    // };

    useEffect(() => {
        setMessages(
        [
            {
            "sender_username": "alice",
            "receiver_username": "bob",
            "message": "hello world blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah    blah blahblah blah blah blah blah blah blah blah blah",
            "timestamp": "2023-07-13 14:28:39",
            "is_image": false,
            "is_read_by_receiver": false,
            "is_my_message": false
            },
            {
            "sender_username": "bob",
            "receiver_username": "alice",
            "message": "//placekitten.com/600/400",
            "timestamp": "2023-07-13 14:28:30",
            "is_image": true,
            "is_read_by_receiver": true,
            "is_my_message": true
            },
            {
                "sender_username": "alice",
                "receiver_username": "bob",
                "message": "hello world blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah    blah blahblah blah blah blah blah blah blah blah blah",
                "timestamp": "2023-07-13 14:28:39",
                "is_image": false,
                "is_read_by_receiver": false,
                "is_my_message": false
            },
            {
                "sender_username": "bob",
                "receiver_username": "alice",
                "message": "//placekitten.com/600/400",
                "timestamp": "2023-07-13 14:29:30",
                "is_image": true,
                "is_read_by_receiver": true,
                "is_my_message": true
            },

        ]
        );
    }, []);

        


    return(
        <Layout title="Chats" loading={isLoading}>
        <Grid height={"100vh"}
              templateColumns="repeat(5, 1fr)" 
              gap={4}
        >
            <GridItem colSpan={2} 
                      bg="tomato" 
                      height="100vh"
            >
                <Flex w="100%" 
                      h="100vh" 
                      justify="center" 
                      align="center"
                >
                    <Flex w={["100%", "100%", "40%"]}
                          h="90%" 
                          flexDir="column"
                    >
                        <div>
                            <h1>Sidebar</h1>
                        </div>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem colSpan={3} 
                      height="100vh"
            >
                <Flex w="100%" 
                      h="100vh" 
                      align = "left"
                >
                    <Flex h="90%" 
                          flexDir="column" 
                          w="90%" 
                          padding="1rem"
                    >
                    <ChatHeader />

                    <Divider />

                    <ChatBox messages={messages} />

                    <InputBox messages={messages} setMessages={setMessages} />

                        {/* <div>
                            <h1>Chats</h1>
                        </div> */}
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
        </Layout>
    )
}

export default GetChats;
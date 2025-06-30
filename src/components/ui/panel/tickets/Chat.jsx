import { Admin, User } from "./Answer";

export default function Chat({messages}) {
    return (
        <>
            {messages.map((message, index) => (
                message.is_admin == 1 ? (
                    <Admin
                        key={index}
                        name={`${message.user?.name}${message.user?.last_name ? " " + message.user.last_name : ""}`}

                        msg={message.message}
                        media={message.media}
                        date={message.created_at}
                    />
                ) : (
                    <User
                        name={`${message.user?.name}${message.user?.last_name ? " " + message.user.last_name : ""}`}
                        key={index}
                        media={message.media}
                        msg={message.message}
                        date={message.created_at}
                    />
                )
            ))}
        </>
    );
}
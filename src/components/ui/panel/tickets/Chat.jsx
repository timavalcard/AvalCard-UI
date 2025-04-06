import { Admin, User } from "./Answer";

export default function Chat({messages}) {
    return (
        <>
            {messages.map((message, index) => (
                message.is_admin ? (
                    <Admin
                        key={index}
                        name={`${message.user?.name}${message.user?.last_name ? " " + message.user.last_name : ""}`}

                        msg={message.message}
                        date={message.created_at}
                    />
                ) : (
                    <User
                        name={`${message.user?.name}${message.user?.last_name ? " " + message.user.last_name : ""}`}
                        key={index}
                        msg={message.message}
                        date={message.created_at}
                    />
                )
            ))}
        </>
    );
}
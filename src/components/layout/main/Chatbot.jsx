'use client';
import { useState, useRef,useEffect } from 'react';

import { MessageCircle, X, User, Bot } from 'lucide-react';


export default function Chatbot() {
    const chatRef = useRef(null);

    const [messages, setMessages] = useState([
        { role: 'system', content: `پرامپت چت بات "اول کارت"  
هدف: پاسخگویی هوشمند به سوالات مرتبط با خدمات "اول کارت" شامل:  
۱. نقد کردن درآمد دلاری به تومان  
۲. خرید گیفتکارتهای بینالمللی (مثل آمازون، اپل، گوگل پلی و غیره)  
۳. خرید کالا از وبسایتهای خارجی  
۴. پرداخت در پلتفرمهای خارجی (اشتراکها، خدمات آنلاین و غیره).  

---

دستورالعملهای پاسخدهی:  
۱. محدوده پاسخها:  
   - فقط به سوالات مرتبط با ۴ خدمت بالا پاسخ دهید.  
   - هر سوال خارج از حوزه (مثلاً آبوهوا، اخبار، مسائل شخصی) را با عبارت زیر پاسخ دهید:  
     *"متأسفانه این سوال مرتبط با خدمات اول کارت نیست. لطفاً سوالات خود را در زمینه نقد کردن دلار، خرید گیفتکارت، یا پرداخت در سایتهای خارجی مطرح کنید."*  

۲. پاسخهای نمونه برای سوالات متداول:  
   - نرخ تبدیل دلار به تومان:  
     *"نرخ دقیق تبدیل روزانه در پنل کاربری سایت قابل مشاهده است. برای اطلاعات بیشتر، لطفاً وارد حساب کاربری خود شوید."*  
   - روش نقد کردن درآمد دلاری:  
     *"برای تبدیل دلار به تومان، در پنل کاربری بخش «نقد کردن درآمد» را انتخاب کنید و مراحل ثبت درخواست را تکمیل نمایید."*  
   - کارمزد خرید گیفتکارت:  
     *"کارمزد خرید گیفتکارت بر اساس نوع کارت و مبلغ متفاوت است. لیست دقیق کارمزدها در صفحه «خرید گیفتکارت» موجود است."*  
   - پرداخت در سایتهای خارجی:  
     *"برای پرداخت در سایتهای خارجی، از بخش «پرداخت بینالمللی» در پنل کاربری، اطلاعات فروشگاه و مبلغ را وارد کنید."*  
   - زمان واریز تومان:  
     *"درخواستهای نقد کردن دلار حداکثر طی ۲۴ ساعت کاری پردازش میشوند."*  

۳. پاسخ به سوالات غیرمربوط:  
   - مثال: *"آیا فردا باران میآید؟"* → پاسخ: *"متأسفانه این سوال مرتبط با خدمات اول کارت نیست"*  
   - مثال: *"چطور رمز عبورم را تغییر دهم؟"* → پاسخ: *"برای تغییر رمز عبور، به بخش «تنظیمات حساب» در پنل کاربری مراجعه کنید."*  

۴. لحن و سبک پاسخها:  
   - رسمی اما دوستانه.  
   - از اصطلاحات تخصصی پیچیده پرهیز شود.  
   - در صورت نیاز به راهنمایی بیشتر، کاربر را به پشتیبانی ۲۴/۷ ارجاع دهید.  

---

نکات کلیدی:  
- هرگز مشاوره مالی یا حقوقی ارائه ندهید.  
- از اشاره به رقبا یا خدمات مشابه خودداری کنید.  
- در صورت عدم اطمینان از پاسخ، پیشنهاد تماس با پشتیبانی داده شود.  

تست نمونه:  
- سوال: *"چقدر زمان میبرد تا گیفتکارت آمازون برسه؟"* → پاسخ مناسب  
- سوال: *"نظرتان درباره قیمت بیتکوین چیست؟"* → پاسخ غیرمرتبط` },
        { role: 'assistant', content: 'سلام! چطور می‌تونم کمکتون کنم؟' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const messagesEndRef = useRef(null);

    /*useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);*/

    const toggleChat = () => {
        if (isOpen) {
            document.querySelector('.chatbox').classList.add('closing');

            setTimeout(() => {
                setIsOpen(false);
                setIsVisible(false);
            }, 400); // مدت زمان برابر با transition
        } else {
            setIsVisible(true);
            setTimeout(() => {
                setIsOpen(true);
            }, 10); // کمی تاخیر برای اعمال کلاس
        }
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = { role: 'user', content: input, animation: true };
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setInput('');
        setLoading(true);

        // حذف کلاس انیمیشن بعد از نیم ثانیه
        setTimeout(() => {
            setMessages(prevMessages =>
                prevMessages.map((msg, index) =>
                    index === prevMessages.length - 1 ? { ...msg, animation: false } : msg
                )
            );
        }, 300);

        await new Promise(resolve => setTimeout(resolve, 600));

        const res = await fetch('/api/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: [...messages, newMessage] })
        });

        setLoading(false);
        if (!res.ok) return;

        const data = await res.json();
        setMessages(prevMessages => [
            ...prevMessages,
            { ...data.choices[0].message, animation: true }
        ]);

// حذف کلاس انیمیشن بعد از نیم ثانیه
        setTimeout(() => {
            setMessages(prevMessages =>
                prevMessages.map((msg, index) =>
                    index === prevMessages.length - 1 ? { ...msg, animation: false } : msg
                )
            );
        }, 300);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatRef.current && !chatRef.current.contains(event.target)) {
                if (isOpen) {
                    document.querySelector('.chatbox').classList.add('closing');
                    setTimeout(() => {
                        setIsOpen(false);
                        setIsVisible(false);
                    }, 400);
                }
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    return (
        <div className="chatbot-container">
            <button onClick={toggleChat} className={`chat-button ${isOpen ? 'open' : ''}`}>
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {isVisible && (
                <div className={`chatbox ${isOpen ? 'open' : ''}`} ref={chatRef}>
                    <div className="messages">
                        {messages.map((msg, i) => (
                            msg.role !== "system" && (
                                <div key={i} className={`message-container ${msg.role} ${msg.animation ? 'entering' : ''}`}>
                                        {msg.role === 'assistant' ? <Bot className="icon bot-icon" /> : <User className="icon user-icon" />}
                                    <div className={`message ${msg.role} `}>
                                        {msg.content}
                                    </div>
                                </div>
                            )
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="input-area">
                        <input
                            className="chat-input"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' && sendMessage()}
                        />
                        <button className="send-button" onClick={sendMessage} disabled={loading}>
                            ارسال
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .chatbot-container {
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    z-index: 100;
                }
                .chat-button {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #4c8bf5, #1e4db7);
                    color: white;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                    transition: transform 0.3s ease-in-out;
                }
                .chat-button.open {
                    background: #d32f2f;
                    transform: rotate(90deg);
                }
                .chatbox {
                    width: 320px;
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                    position: absolute;
                    bottom: 60px;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    opacity: 0;
                    transform: scale(0.8);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    pointer-events: none;
                }
                .chatbox.open {
                    opacity: 1;
                    transform: scale(1);
                    pointer-events: auto;
                }
                .messages {
                    height: 300px;
                    overflow-y: auto;
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                    display: flex;
                    flex-direction: column;
                }
                .message-container{
                display:flex;align-items:center; transition: all 0.3s ease-in-out;
                }
                
                .message-container.assistant{
                flex-direction:row-reverse
                }
                .message-container.assistant svg{
                margin-right:5px;
                }
                .message {
                    padding: 8px 12px;
                    border-radius: 15px;
                    margin: 5px 0;
                    max-width: 75%;
                    word-wrap: break-word;
                    transition: all 0.3s ease-in-out;
                }
                .message.user {
                 align-self: flex-start;
                    margin-right:6px;
                    background: linear-gradient(135deg, #4c8bf5, #1e4db7);
                    color: white;
                }
                .message.assistant {
                    align-self: flex-end;
                    background: #f1f1f1;
                    color: #333;margin-left:6px
                }
                .message-container.entering {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
                .message-container:not(.entering) {
                    opacity: 1;
                    transform: translateY(0);
                }
                .input-area {
                    display: flex;
                    padding: 8px;
                    background: #fff;
                }
                .chat-input {
                    flex: 1;
                    padding: 10px;
                    border: none;
                    border-radius: 10px;
                    outline: none;
                    background: #f8f8f8;
                }
                .send-button {
                    margin-left: 8px;
                    padding: 8px 15px;
                    background: linear-gradient(135deg, #4c8bf5, #1e4db7);
                    color: white;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }
                .send-button:disabled {
                    background: #bbb;
                    cursor: not-allowed;
                }.icon {
                    width: 28px;
                    height: 28px;
                }
                .bot-icon {
                    color: #4c8bf5;
                }
                .user-icon {
                    color: #d32f2f;
                }.chatbox.closing {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.3s ease, transform 0.3s ease;
}
            `}</style>
        </div>
    );
}

"use client"

import { useState } from "react";
import Table from "../Table";
import Label from "../../globals/labelStatus/Label";
import Link from "next/link";
import Input from "../../globals/Input";
import Button from "../../globals/Button";

export default function Content({tickets}) {



    const [data, setData] = useState(tickets);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDept, setSelectedDept] = useState("");

    const departments = ["همه", "امور مالی", "امور اداری", "فنی"];

    const filteredData = data.filter((item) => {

        const matchSearch =
            item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.lastUpdate.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.date.toLowerCase().includes(searchQuery.toLowerCase());

        const matchDepartment =
            selectedDept === "همه" || selectedDept === "" || item.department === selectedDept;

        return matchSearch && matchDepartment;
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDeptChange = (e) => {
        setSelectedDept(e.target.value);
    };

    return (
        <div >
            <div className="section flex mt-custom-4 justify-between">
                <div className="flex gap-6">
                    <div>
                        <Input
                            value={selectedDept}
                            onChange={handleDeptChange}
                            isSelect
                            placeholder="انتخاب بخش"
                        >
                            {departments.map((dept, key) => (
                                <option value={dept}>
                                    {dept}
                                </option>
                            ))}
                        </Input>
                    </div>

                    <div>
                        <Input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="جستجو در تیکت ها"
                            icon={<svg width="16" height="17" className="text-muted" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.66634 14.052C11.1641 14.052 13.9997 11.2165 13.9997 7.71871C13.9997 4.22091 11.1641 1.38538 7.66634 1.38538C4.16854 1.38538 1.33301 4.22091 1.33301 7.71871C1.33301 11.2165 4.16854 14.052 7.66634 14.052Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6663 14.7187L13.333 13.3854" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                        />
                    </div>
                </div>
                <Button flex size="auto" className={'!rounded-[12px] !text-sm !h-[3.025rem]'} href="/panel/tickets/add">
                    <div>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_528_1416)">
                                <path d="M3.14258 4.21863H8.14258M5.64258 1.71863V6.71863M12.3092 18.2356V12.552H17.9929M11.4759 1.71863H16.4759C17.3964 1.71863 18.1426 2.46482 18.1426 3.38529V11.8616C18.1426 12.3036 17.967 12.7276 17.6544 13.0401L12.7974 17.8971C12.4848 18.2097 12.0609 18.3853 11.6189 18.3853H4.80924C3.88877 18.3853 3.14258 17.6391 3.14258 16.7186V10.052" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_528_1416">
                                    <rect width="20" height="20" fill="white" transform="translate(0.642578 0.052002)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        ارسال تیکت پشتیبانی جدید
                    </div>
                </Button>
            </div>

            <div className="mt-custom-4">
                <Table>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>تاریخ</th>
                            <th>بخش</th>
                            <th>عنوان</th>
                            <th>وضعیت</th>
                            <th>آخرین به‌روزرسانی</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item,index) => (
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.created_at}</td>
                            <td>{item.department}</td>
                            <td>{item.subject}</td>
                            <td>
                                <Label status={item.status} />
                            </td>
                            <td>{item.updated_at}</td>
                            <td>
                                <Link href={`/panel/tickets/${item.id}`} className="flex items-center align-middle gap-1 text-center justify-center cursor-pointer transition-all !text-[#909090] hover:!text-[#3b3b3b]">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.29248 4.0394V8.0394M4.29248 6.0394H8.29248M11.2925 6.0394C11.2925 8.80082 9.0539 11.0394 6.29248 11.0394C3.53106 11.0394 1.29248 8.80082 1.29248 6.0394C1.29248 3.27797 3.53106 1.0394 6.29248 1.0394C9.0539 1.0394 11.2925 3.27797 11.2925 6.0394Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    جزئیات بیشتر
                                </Link>
                            </td>
                        </tr>
                    ))}
                        {filteredData.length === 0 && (
                            <tr>
                                <td colSpan="6" style={styles.noData}>
                                    هیچ داده‌ای یافت نشد.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

const styles = {
    container: {
        direction: "rtl",
        maxWidth: "800px",
        margin: "40px auto",
        fontFamily: "sans-serif",
    },
    heading: {
        textAlign: "center",
        marginBottom: "20px",
    },
    filterContainer: {
        marginBottom: "10px",
    },
    searchContainer: {
        marginBottom: "20px",
    },
    label: {
        marginRight: "10px",
    },
    select: {
        padding: "5px",
    },
    input: {
        padding: "5px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    th: {
        border: "1px solid #ccc",
        padding: "8px",
        backgroundColor: "#f2f2f2",
    },
    td: {
        border: "1px solid #ccc",
        padding: "8px",
        textAlign: "center",
    },
    noData: {
        textAlign: "center",
        padding: "20px",
    },
};

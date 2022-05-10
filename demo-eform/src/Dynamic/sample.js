export const sample =
{
    "template_id": "RFI_Step2",
    "layout": {
        "template_title": "Test template",
        "template_footer": "template Footer",
        "template_width": "100%",
        "section": [
            {
                "section_id": "Profile",
                "section_header": "User Info",
                "section_footer": "",
                "fields": [
                    {
                        "field_id": "user_first_name",
                        "field_label": "User First Name Step2",
                        "field_type": "textbox",
                        "placeholder": "Please input your first name",
                        "value": ""
                    },
                    {
                        "field_id": "user_last_name",
                        "field_label": "User Last Name",
                        "field_type": "textbox",
                        "placeholder": "Please input your last name",
                        "value": ""
                    },
                    {
                        "field_id": "user_email",
                        "field_label": "User Email",
                        "field_type": "email",
                        "placeholder": "@example.com",
                        "value": ""
                    },
                    {
                        "field_id": "user_password",
                        "field_label": "User Password",
                        "field_type": "password",
                        "placeholder": "Please input your password",
                        "value": ""
                    },
                    {
                        "field_id": "user_texarea",
                        "field_label": "User Textarea",
                        "field_type": "textarea",
                        "placeholder": "Please input your textarea",
                        "value": ""
                    },
                    {
                        "field_id": "user_age",
                        "field_label": "User Age",
                        "field_type": "number",
                        "placeholder": "Please input your age",
                        "value": ""
                    },
                    {
                        "field_id": "user_company",
                        "field_label": "User Company",
                        "field_type": "select",
                        "placeholder": "Please input your company",
                        "option": [
                            {
                                "value": "DIF",
                                "label": "DIF"
                            },
                            {
                                "value": "google",
                                "label": "google"
                            },
                            {
                                "value": "MSFT",
                                "label": "Microsoft"
                            },
                            {
                                "value": "123",
                                "label": "123"
                            }
                        ]
                    },
                    {
                        "field_id": "user_skill",
                        "field_label": "User Skill",
                        "field_type": "checkbox",
                        "placeholder": "Please input your skill",
                        "option": [
                            {   
                                "_id": 0,
                                "label": "Java",
                                "value": false
                            },
                            {   
                                "_id": 1,
                                "label": "C#",
                                "value": false
                            },
                            {   
                                "_id": 2,
                                "label": "Python",
                                "value": false
                            }
                        ]
                    },
                    {
                        "field_id": "user_date",
                        "field_label": "User date",
                        "field_type": "date",
                        "placeholder": "Please input your date",
                        "value": ""
                    },
                    {
                        "field_id": "user_datetime-local",
                        "field_label": "User Datetime-local",
                        "field_type": "datetime-local",
                        "placeholder": "Please input your datetime-local",
                        "value": ""
                    },
                    {
                        "field_id": "user_time",
                        "field_label": "User Time",
                        "field_type": "time",
                        "placeholder": "Please input your time",
                        "value": ""
                    },
                    {
                        "field_id": "sex",
                        "field_label": "Sex",
                        "field_type": "radio",
                        "options": [
                            {
                                "label": "Male",
                                "value": "M"
                            },
                            {
                                "label": "Female",
                                "value": "F"
                            }
                        ],
                        "value": " "
                    },
                    {
                        "field_id": "marriage",
                        "field_label": "Marriage",
                        "field_type": "radio",
                        "options": [
                            {
                                "label": "Married",
                                "value": "Married"
                            },
                            {
                                "label": "single",
                                "value": "single"
                            }
                        ],
                        "value": " "
                    },
                    {
                        "field_id": "date_picker_1",
                        "field_label": "Pick a Date",
                        "field_type": "date_picker",
                        "value": ""
                    },
                    {
                        "field_id": "time_picker_1",
                        "field_label": "Pick a time",
                        "field_type": "time_picker",
                        "value": ""
                    },
                    {
                        "field_id": "reset",
                        "field_type": "button",
                        "action": "reset",
                        "label": "Reset"
                    },
                    {
                        "field_id": "submit",
                        "field_type": "button",
                        "action": "submit",
                        "method": "POST",
                        "link": "http://localhost:61279/RFI/submit",
                        "label": "Submit"
                    }
                ]
            }
        ]
    }
}


export const initialState = {
    view: 'list',
    selectedTask: '38264',
    callModal: false,
    noteModal: false,
    callMessage: '',
    callDuration: '',
    noteMessage:'',
    tasks: [
        {
            number: '43580',
            date: "25/07/2020 10:52",
            customer: "Anna Wilson",
            summary: "This customer owes loan arrears",
            taskBody: "This customer owes loan arrears. Contact her by calling +44333333333 to arrange a payment plan.",
            expanded: false,
            avatar: '/assets/Anna.jpg',
            logs: [
                {
                    id: '1',
                    type: "call",
                    message: "This customer owes loan arrears",
                    date: "25/07/2020 10:52",
                    durationInMinutes: "4"
                },
                {
                    id: '2',
                    type: "note",
                    message: "Contact her by calling +44333333333 to arrange a payment plan",
                    date: "25/07/2020 10:58",
                },
            ]
        },
        {
            number: '43581',
            date: "27/07/2020 11:22",
            customer: "Paul Smith",
            summary: "This customer has locked his login credentials",
            taskBody: "This customer has locked his login credentials. Contact him at +44777777777 to give him a temporary password over the phone.",
            expanded: true,
            avatar: "/assets/Paul.jpg",
            logs: [
                {
                    id: '1',
                    type: "call",
                    message: "This customer has locked his login credentials",
                    date: "27/07/2020 11:22",
                    durationInMinutes: "3"
                },
                {
                    id: '2',
                    type: "note",
                    message: "Contact him at +44777777777 to give him a temporary password over the phone",
                    date: "27/07/2020 11:25",
                },
            ]
        },
        {
            number: '43582',
            date: "29/07/2020 14:43",
            customer: "Emma Rogers",
            summary: "The customer's debit card has been destroyed",
            taskBody: "The customer's debit has been destroyed. Contact her at +44000000000 to inform her about the supporting documents she must submit in order to complete the issuance of the new card.",
            expanded: false,
            avatar: '/assets/Emma.jpg',
            logs: [
                {
                    id: '1',
                    type: "call",
                    message: "The customer's debibt has been destroyed",
                    date: "29/07/2020 14:43",
                    durationInMinutes: "7"
                },
                {
                    id: '2',
                    type: "note",
                    message: "Contact her at +44000000000 to inform her about the supporting documents she must submit in order to complete the issuance of the new card",
                    date: "29/07/2020 14:47",
                },
            ]
        },
    ]
};
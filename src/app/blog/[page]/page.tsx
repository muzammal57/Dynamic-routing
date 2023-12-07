const blogsInfo = [{
    id: 1,
    name: "ali",
    rollNumber: 12,
    description: "below-average"
},
{
    id: 2,
    name: "asad",
    rollNumber: 10,
    description: "average"
},
{
    id: 3,
    name: "aslam",
    rollNumber: 8,
    description: "above-average"
},
{
    id: 4,
    name: "akram",
    rollNumber: 6,
    description: "good"
},
{
    id: 5,
    name: "aman",
    rollNumber: 4,
    description: "very good"
},
{
    id: 6,
    name: "aman-ali",
    rollNumber: 2,
    description: "normal"
},
{
    id: 7,
    name: "asad ali",
    rollNumber: 1,
    description: "good"
},
{
    id: 8,
    name: "nouman",
    rollNumber: 3,
    description: "better"
},
{
    id: 9,
    name: "usman",
    rollNumber: 5,
    description: "excellent"
},
{
    id: 10,
    name: "rehan",
    rollNumber: 7,
    description: "average"
},
{
    id: 11,
    name: "zeeshan",
    rollNumber: 7,
    description: "outsanding"
},
{
    id: 12,
    name: "ijaz",
    rollNumber: 9,
    description: "very good"
},
{
    id: 13,
    name: "ubaid",
    rollNumber: 11,
    description: " good"
},
{
    id: 14,
    name: "aaman",
    rollNumber: 13,
    description: "avrage"
},
{
    id: 15,
    name: "moujib",
    rollNumber: 15,
    description: "excellent"
}
]
export default function About({ params }: { params: { page: number } }){
    const selectedInfo=blogsInfo.filter((item)=>item.id==params.page)
    return(
        <div>{`Name =`}{selectedInfo[0]?.name}
        <div>{`Description =`}{selectedInfo[0]?.description}</div>
        <div>{`Roll Number =`}{selectedInfo[0]?.rollNumber}</div>
        </div>
        
    )

    
}
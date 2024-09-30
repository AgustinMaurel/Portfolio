export default function Description(){


            
    const text:string ='quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de LorageMaker, el cualorem Ipsum. '
    return (
        <div id="description" className=" flex flex-col text-black  h-full max-h-screen min-h-screen w-full justify-center  items-start ">
            <h1 className="font-bold text-xl pb-2">Sobre Mi</h1>
            <textarea 
                className=" flex justify-center items-center h-full w-full bg-slate-500 text-black pr-16" 
                readOnly={true}
                
                rows={20} 
                content="s"
                disabled={true}
                draggable={false}
                name="area"
                id=" textarea"
                value={text}
                >
                
            </textarea>
        </div>
    )
}
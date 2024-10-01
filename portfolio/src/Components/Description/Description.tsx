export default function Description(){


            
    const text:string ='quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de LorageMaker, el cualorem Ipsum. '
    return (
        <div id="description" className=" flex flex-col text-white  h-full max-h-screen min-h-screen w-full justify-center  items-start ">

            <h1 className="font-bold text-xl pb-2">Sobre Mi</h1>
            <p  className=" flex justify-center items-center h-full text-wrap w-full bg-inherit  outline-none  pr-16 pb-56">
                {text}
            </p>
            
        </div>
    )
}
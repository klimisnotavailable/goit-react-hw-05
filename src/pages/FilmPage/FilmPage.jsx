import FilmDescription from "../FilmDescription/FilmDescription"

export default function FilmItem(data) {
    console.log(data)
    return <div>
        <div>
            {/* <img src={} alt="" /> */}
        </div>
        <FilmDescription data={data}></FilmDescription>
    </div>
}
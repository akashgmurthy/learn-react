export default function ProfileGalleryComponent({ props }) {
    return (
        <section className="profile">
            <h2>{props.name}</h2>
            <img
                className="avatar"
                src={props.imgUrl}
                alt={props.name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {props.profession}
                </li>
                <li>
                    <b>Awards: {props.awardCount}</b>
                    ({props.awards})
                </li>
                <li>
                    <b>Discovered: </b>
                    {props.discovered}
                </li>
            </ul>
        </section>
    )

}
export default function PersonalDetailsRender({firstName, lastName}) {
    const fullName = `${firstName} ${lastName}`

    return (
        <div className="personal-details-render">{fullName}</div>
    )
}
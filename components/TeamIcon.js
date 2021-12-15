import Image from "next/image"

const TeamIcon = (props) => {
    const fileName = `/../public/team_logos/${props.teamId}.svg`
    return (
        <>
            <Image src={fileName} width={props.width} height={props.height}/>
        </>
    )
}

export default TeamIcon

import Image from "next/image"

const TeamIcon = (props) => {
    const fileName = `/team_logos/${props.teamId}.svg`
    console.log(fileName);
    return (
        <>
            <Image src={fileName} width={props.width} height={props.height}/>
        </>
    )
}

export default TeamIcon

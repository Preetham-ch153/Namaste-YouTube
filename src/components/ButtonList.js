

const ButtonList = () => {
    const List = ["All","Music","Indian Premier League","Mixes","Tamil Cinema","Ranveer Singh","Podcasts","News","Anirudh Ravichandran","Cricket","Job Interviews","Bowling","Live"];

    return (
        <div>
            {List.map((name) =><button key={name} className="m-2 px-2 py-1 bg-gray-200 rounded-lg cursor-pointer">{name}</button>)}
        </div>
    )
}

export default ButtonList;
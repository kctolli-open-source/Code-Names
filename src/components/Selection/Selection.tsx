import { assassin, teams } from '@/common/wordPicker';
import { red, blue } from '@/common/teamPicker';

const redTeam = teams[red];
const blueTeam = teams[blue];

export default function Selection () {
    return (
        <section>
            <br /><hr />
            <p>
                <b>Assassin: </b> 
                {assassin}
            </p>
            <p>
                <b>Red ({redTeam.length}): </b> 
                {redTeam.join(', ')}
            </p>
            <p>
                <b>Blue ({blueTeam.length}): </b> 
                {blueTeam.join(', ')}
            </p>
        </section>
    )
}

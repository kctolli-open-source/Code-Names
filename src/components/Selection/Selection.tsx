//'use client';
import { red, blue } from '@/common/teamPicker';

export default function Selection ({assassin, teams}: any) {
    const redTeam = teams[red];
    const blueTeam = teams[blue];

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
    );
}

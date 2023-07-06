'use client';

export default function Selection ({assassin, red, blue}: any) {
    return (
        <section>
            <br /><hr />
            <p>
                <b>Assassin: </b> 
                {assassin}
            </p>
            <p>
                <b>Red ({red.length}): </b> 
                {red.join(', ')}
            </p>
            <p>
                <b>Blue ({blue.length}): </b> 
                {blue.join(', ')}
            </p>
            <hr /><br />
        </section>
    );
}

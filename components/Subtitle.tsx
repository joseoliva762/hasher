interface SubtitleParams {
    subtitle: string,
    classname?: string
}

export default function SubTitle({ subtitle, classname }: SubtitleParams) {

    return (
        <h2 className={`font-bold text-hasher-blue text-xl hover:cursor-default ${classname || ''}`}>
            {subtitle}
        </h2>
    );

}
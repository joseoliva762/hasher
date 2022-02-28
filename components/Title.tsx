interface TitleParams {
    title: string,
    classname?: string
}

export default function Title({ title, classname }: TitleParams) {

    return (
        <h1 className={`font-bold text-hasher-blue text-4xl hover:cursor-default ${classname || ''}`}>
            {title}
        </h1>
    );

}
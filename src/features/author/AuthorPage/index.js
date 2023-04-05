import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import image from "./justyna.jpg";
import { ImageWrapper, Image, Paragraph } from "./styled";

const AuthorPage = () => {
    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Justyna Boesche"
                body={
                    <>
                        <ImageWrapper>
                            <Image src={image} alt="Justyna" />
                        </ImageWrapper>
                        <Paragraph>
                            Cześć! Nazywam się Justyna i mieszkam w pięknej podkrakowskiej wsi😍.
                        </Paragraph>
                        <Paragraph>Lubię chodzić po górach, grać na pianinie, śpiewać i tańczyć, jednak ostatnimi czasy moją największą
                            pasją jest <strong>ogród</strong>🌸.
                        </Paragraph>
                        <Paragraph>W swoim życiu zawodowym pracowałam w <b>księgowości</b>, <b>procuremencie</b>, a także w charakterze <b><i>stay-at-home-mum</i></b>💪🏻.
                        </Paragraph>
                        <Paragraph>W przyszłości chciałabym spróbować swoich sił w branży IT, dlatego też rozpoczęłam kurs <b>Frontend Developer</b> w <strong>⚡YouCode⚡</strong>.
                        </Paragraph>
                    </>
                }
            />
        </ Container>
    );
}

export default AuthorPage;
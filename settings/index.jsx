function userSettings(props) {
    return(
        <Page>
            <Section>
                <Text>Thank you for trying <Text bold>Miku Dancing</Text> ! ❤️</Text>
                <Text>This project is open sourced on <Link source="https://github.com/B3rning14/fitbit-miku-on-stage">Github</Link>. You can ask there for new features or report an issue.</Text>
                <Text>You like this clockface ! Show it to me by buying me a <Link source="https://paypal.me/B3rning14FR">beer</Link></Text>
            </Section>
            <Section
                title={<Text bold align="center">Accessibility</Text>}>
                <Toggle
                    settingsKey="reduceAnimations"
                    label="Reduce animations"
                />
            </Section>
            <Section title={<Text bold align="center">Credits</Text>}>
                <Text>
                    <Text bold>Miku Animation : </Text>
                    <Link source="https://www.deviantart.com/johnsu/art/Halfne-Miku-Studio-396850314">Halfne Miku Studio</Link>
                    <Text> by </Text>
                    <Link source="https://github.com/Bietol">JohnSu</Link>
                </Text>
                <Text>
                    <Text bold>Background scene : </Text>
                    <Link source="https://www.deviantart.com/philippe-n-12/art/DOWNLOAD-MMD-Live-Stage-Club-2-0-855946375">MMD Live Stage Club 2.0</Link>
                    <Text> by </Text>
                    <Link source="https://www.deviantart.com/philippe-n-12">Philippe-N-12</Link>
                </Text>
                <Text>
                    <Text bold>Miku Hatsune</Text>
                    <Text> character was created by </Text>
                    <Link source="http://www.crypton.co.jp/">Crypton Future Media, inc.</Link>
                    <Text> under licence </Text>
                    <Link source="https://piapro.net/intl/en_for_creators.html">Creative Commons – Attribution - NonCommercial 3.0 Unported License (“CC BY-NC”)</Link>
                </Text>
            </Section>
        </Page>
    );
}

registerSettingsPage(userSettings);

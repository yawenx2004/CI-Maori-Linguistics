/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './AboutStyle.scss';

function AboutPage(props) {
  const [selectedSection, setSelectedSection] = useState(null);

  const toggleSection = (section) => {
    setSelectedSection(selectedSection === section ? null : section);
  };

  return (
    <div className="page about-page">
      <div className="section">
        <h1>About the project</h1>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('language')}>
            What is Cook Islands  Māori?
          </h2>
          {selectedSection === 'language' && (
          <div className="about-answer">
            <p>
              Cook Island&apos;s Māori is spoken by people in the Cook Islands,
              as well as Cook Islanders living in Aoteoroa New Zealand and
              Australia. There are approximately 13000 people who speak the
              language in the Cook Islands. It is a Polynesian language, related
              to languages like Te Reo Māori from Aotearoa New Zealand, ‘olelo
              Hawai’i from Hawaii and Tahitian from French Polynesia.
            </p>
            <p>
              The language is vulnerable in some islands, and endangered in others.
              This means that there are many people, including children who no longer
              speak the language. There are ongoing efforts to continue the transmission
              of the language across generations.
            </p>
            <p>
              If you would like to learn more about the language, you can read&nbsp;
              <a className="actual-link" href="https://www.lddjournal.org/article/id/1187/" target="_blank" rel="noreferrer">
                <i>Language Contexts: Te Reo Māori o te Pae Tonga o te Kuki Airani</i>
              </a>
              , also known as Southern Cook Islands Māori.
            </p>
            <div className="wrapper">
              <iframe
                className="iframe"
                src="https://www.youtube.com/embed/nvciGg4xdvc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('ai')}>
            Artificial Intelligence and Indigenous Languages
          </h2>
          {selectedSection === 'ai' && (
          <div className="about-answer">
            <p>
              Across the world, many Indigenous communities work hard to make sure that
              their languages continue to be normalized as a part of their daily lives,
              and that they continue to create new speakers and transmit it to future
              generations.
            </p>
            <p>
              There is ongoing work trying to understand how computers can contribute to
              this process. Artificial intelligence and technology by themselves cannot
              revitalize Indigenous languages. This can only be done by community members
              as they expand the use of their languages.
            </p>
            <p>
              We think that machine learning tools can help language workers and activists
              accelerate some aspects of their language documentation work. For example,
              the transcription of recordings and the analysis of the grammar can be aided
              by computers, leaving the workers more time to focus on other activities.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('participate')}>
            I want to participate in the project!
          </h2>
          {selectedSection === 'participate' && (
          <div className="about-answer">
            <p>
              If you are a Cook Islander or a Pacific Islander who would like
              to learn more about technology and natural language processing,
              please contact us!
            </p>
            <p>
              We have been working for approximately 7 years making tools that
              help with the processing of Indigenous languages. We look
              forward to collaborating with other Pacific communities, and we
              want to increase communities’ capabilities to develop
              technological tools imbued with Indigenous values and
              objectives.
            </p>
            <p>
              If you would like to use the models for your research, please
              cite the relevant work. If you would like to discuss using the
              models themselves, or having access to the data, please read the
              conditions of the
              {' '}
              <a
                className="actual-link"
                href="https://github.com/TeHikuMedia/Kaitiakitanga-License/blob/tumu/wharekorero_app.md"
                target="_blank"
                rel="noreferrer"
              >
                Kaitiakitanga License
              </a>
              , under which the models and data are protected.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('contributors')}>
            Contributors to the project
          </h2>
          {selectedSection === 'contributors' && (
          <div className="about-answer">
            <p>
              The lead of the project is
              {' '}
              <a
                className="actual-link"
                href="https://profiles.auckland.ac.nz/ake-nicholas"
                target="_blank"
                rel="noreferrer"
              >
                Dr. Sally Akevai Nicholas
              </a>
              , a linguist from Ngā Pū Toru who works at the University of
              Auckland.
            </p>
            <p>
              Some of the technological tools of the project have been
              developed in collaboration with
              {' '}
              <a
                className="actual-link"
                href="https://linguistics.dartmouth.edu/people/rolando-coto-solano"
                target="_blank"
                rel="noreferrer"
              >
                Rolando Coto-Solano
              </a>
              {' '}
              from Dartmouth College. The text-to-speech module was developed
              in collaboration with
              {' '}
              <a
                className="actual-link"
                href="https://profiles.auckland.ac.nz/jesin-james"
                target="_blank"
                rel="noreferrer"
              >
                Dr. Jesin James
              </a>
              , from University of Auckland.
            </p>
            <p>
              The data collection for the development of the technological
              tools has been carried out in collaboration with the
              {' '}
              <a
                className="actual-link"
                href="https://www.usp.ac.fj/usp-cook-islands/"
                target="_blank"
                rel="noreferrer"
              >
                Rarotonga Campus of the University of the South Pacific
              </a>
              . We are extremely thankful to community members like Jean
              Tekura Mason and Courtney Napa for their collaboration in the
              data collection process.
            </p>
            <p>
              There are a number of students and colleagues who have also
              collaborated in the building of the technological tools in the
              website:
            </p>
            <ul>
              <li>
                <strong>Speech recognition:</strong>
                {' '}
                Piripi Wills, Liam
                Koka&apos;ua, Dr Emma Ngakuravaru Powell, Samiha Datta, Syed
                Tanver, Teani DeFries, Ruoyang Zheng, Hope Kujawa, Quartz
                Colvin.
              </li>
              <li>
                <strong>Text-to-speech:</strong>
                {' '}
                Jean Tekura Mason, Joshua
                Zhu, Bovey Yu.
              </li>
              <li>
                <strong>Parsing:</strong>
                {' '}
                Sarah Karnes, Lauren Houchens,
                Sabrina Barton, Trinity Pryor, Victory Sutter.
              </li>
              <li>
                <strong>Forced alignment:</strong>
                {' '}
                Ella Gates, Renata Edas
                Hoh.
              </li>
              <li>
                <strong>Programmers at Dartmouth College:</strong>
                {' '}
                Nitya
                Agarwala, Andrew Shi, Ahmed Elmi, Aynura Erejepbaeva, Casey
                Yang, Emmanuel Dey, Jaziel Aquino, Liya Zenebe, Yawen Xue.
              </li>
            </ul>
          </div>
          )}
        </div>
      </div>

      <div className="section">
        <h1>About the website</h1>
        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('goals')}>
            Goals of the website
          </h2>
          {selectedSection === 'goals' && (
          <div className="about-answer">
            <p>
              This website was developed as a means for the Cook Islands community to access
              tools that allow for the processing of their language using artificial intelligence.
              It will also allow researchers and teachers of Cook Islands Māori to analyze information
              in different linguistic formats. The website can be used without any prior experience with
              programming.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('usage')}>
            How can I use it?
          </h2>
          {selectedSection === 'usage' && (
          <div className="about-answer">
            <p>
              There are several tools available on this website. Click on their names
              below to find out more how to use each of them. The system is free to use
              and it’s meant to support non-commercial use. You can preview some modules,
              such as the speech recognition, where you can transcribe short recordings.
            </p>
            <p>
              If you want to use the other functions, or you want to transcribe longer files,
              you can log into the website using your Google account, or you can create a new
              account using the Login button on the upper right. The files will only be stored
              for
              {' '}
              <strong>X days</strong>
              {' '}
              and will then be deleted. No copy of them will be kept.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('asr')}>
            Speech Recognition (ASR)
          </h2>
          {selectedSection === 'asr' && (
          <div className="about-answer">
            <p>
              Speech recognition is the process of transforming a video or audio recording
              into a transcription of the words spoken in it. In this website we are using a
              fine-tuned version of the
              {' '}
              <a className="actual-link" href="https://huggingface.co/docs/transformers/model_doc/xlsr_wav2vec2" target="_blank" rel="noreferrer">
                XLSR-Wav2Vec2 model
              </a>
              . This has been fine-tuned with
              approximately four hours of monolingual conversations in Cook Islands Māori.
            </p>
            <p>
              Currently, the model has 6% CER (character error rate) and approximately 11% WER (word error rate).
            </p>
            <p>
              If you want to use the speech recognition, please upload your audio file as a .wav,
              .mp3 or .mp4 file. The file will only be stored for X days before it is deleted.
            </p>
            <p>
              If you use this for academic research, please cite the following paper: Coto-Solano et al.
              (2022).
              {' '}
              <i>
                Development of automatic speech recognition for the documentation of Cook Islands
                Māori
              </i>
              . Proceedings of the Language Resources and Evaluation Conference (LREC), 2022, (13), pp. 3872 - 3882.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('tts')}>
            Text-to-Speech (TTS)
          </h2>
          {selectedSection === 'tts' && (
          <div className="about-answer">
            <p>
              Text-to-Speech is the process of taking a written sentence and synthesizing a
              recording of its words, using an artificial voice to pronounce them. For example,
              you can hear the phrase
              {' '}
              <i>Kia orana kōtou kātoatoa</i>
              {' '}
              “Hello everyone” in the recording below:
            </p>
            <div className="wrapper">
              <audio controls>
                <source src="/audio/tts-kia-orana-kotou-katoatoa.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <p>
              In this website we are using a FastSpeech2 model, trained using 90 minutes of monolingual
              recordings. The data for the voice was kindly provided by Jean Tekura Mason from Rarotonga,
              and the voice is modeled after hers. At the moment, the model has an intelligibility of 3.6
              out of 5 in the MOS (mean opinion survey).
            </p>
            <p>
              If you want to use the TTS (text-to-speech) here, just write your sentence here. The
              recording will be stored for XXX days before it is deleted.
            </p>
            <p>
              If you use this for academic research, please cite the following paper: James et al.
              (2022).
              {' '}
              <i>
                Development of Community-Oriented Text-to-Speech Models for Māori &apos;Avaiki Nui
                (Cook Islands Māori)
              </i>
              . Proceedings of the
              {' '}
              <a className="actual-link" href="https://aclanthology.org/2024.lrec-main.432/" target="_blank" rel="noreferrer">
                2024 Joint International Conference on
                Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)
              </a>
              , pp. 4820–4831.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('parsing')}>
            Parsing
          </h2>
          {selectedSection === 'parsing' && (
          <div className="about-answer">
            <p>
              Parsing is the process of taking a sentence and transforming it into a description of
              its grammar, where we can understand the relationship between different words. For example,
              the sentence
              {' '}
              <i>Kua tanu a Tere i te taro</i>
              {' '}
              “Tere planted the taro” looks like this:
            </p>
            <div className="wrapper"><img src="/img/parse-kua-tunu-a-tere-i-te-taro.JPG" alt="Grammar tree diagram" /></div>
            <p>
              We are using the
              {' '}
              <a
                className="actual-link"
                href="https://universaldependencies.org/"
                target="_blank"
                rel="noreferrer"
              >
                Universal Dependencies v2
              </a>
              {' '}
              standard for the relation labeling.
              The parts-of-speech are both in
              {' '}
              <a
                className="actual-link"
                href="https://universaldependencies.org/u/pos/"
                target="_blank"
                rel="noreferrer"
              >
                Universal Dependency UPOS v2
              </a>
              , and in the grammatical
              description by Nicholas (2016). We are using a UDPipe2 model, trained on approximately
              7600 sentences in Cook Islands Māori. The current model has an accuracy of 91% for
              parts-of-speech, 87% for UAS (unlabeled attachment score), and 78% for LAS (labeled
              attachment score).
            </p>
            <p>
              If you use this for academic research, please cite the following paper: Karnes,
              Sarah; Coto-Solano, Rolando; Nicholas, Sally Akevai (2023).
              {' '}
              <i>
                Towards Universal
                Dependencies in Cook Islands Māori
              </i>
              . Proceedings of the Sixth Workshop on the Use of
              Computational Methods in the Study of Endangered Languages (
              {' '}
              <a
                className="actual-link"
                href="https://aclanthology.org/2023.computel-1.18/"
                target="_blank"
                rel="noreferrer"
              >
                Comput-EL
              </a>
              ), pp. 124–129.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('fa')}>
            Forced Alignment
          </h2>
          {selectedSection === 'fa' && (
          <div className="about-answer">
            <p>
              Forced Alignment is a technique where, when you give the model a recording of a language,
              it will find the positions of words and individual sounds in the recording. If you use the
              example recording below, the results will be recorded as a Praat TextGrid and they will
              look like this:
            </p>
            <div className="wrapper"><img src="/img/textgrid-capture.JPG" alt="Grammar tree diagram" /></div>
            <p>
              In order to use the aligner, you need to upload two files:
            </p>
            <ul>
              <li>An audio file in .wav, .mp3 or .mp4 format</li>
              <li>A tab-separated file with the transcription of the file at the phrase level</li>
            </ul>
            <p>
              The tab-separated file should have five columns, similar to a tab-file exported from ELAN:
              The name of the “tier,” the name of the speaker, the start time of the phrase, the end time
              of the phrase in seconds, and the phrase itself. Optionally, you can also add a dictionary
              file for custom words. This has two tab-separated columns: the word itself, and the
              transcription of the word in ARPABET.
            </p>
            <p>
              We are using a
              {' '}
              <a
                className="actual-link"
                href="https://montreal-forced-aligner.readthedocs.io/en/latest/"
                target="_blank"
                rel="noreferrer"
              >
                Montreal Forced Aligner model
              </a>
              , trained on 4 hours of transcribed Cook Islands Māori data.
            </p>
            <p>
              If you use this for academic purposes, please cite the following paper: Coto-Solano, Rolando;
              Nicholas, Sally Akevai; Wray, Samantha (2018).
              {' '}
              <i>
                Development of Natural Language Processing Tools
                for Cook Islands Māori
              </i>
              . Proceedings of the
              {' '}
              <a
                className="actual-link"
                href="https://aclanthology.org/U18-1003/"
                target="_blank"
                rel="noreferrer"
              >
                Australasian Language Technology Association Workshop
              </a>
              ,
              pp. 26–33.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('sc')}>
            Spell Checking
          </h2>
          {selectedSection === 'sc' && (
          <div className="about-answer">
            <p>
              Spell checking is a technique where a text input is transformed into a standard form of
              the orthography of a language. In this website, we transform the text into the form in
              Nicholas (2016).
            </p>
            <p>
              The spell checking module is currently experimental, and it uses a
              {' '}
              <a
                className="actual-link"
                href="https://github.com/bakwc/JamSpell"
                target="_blank"
                rel="noreferrer"
              >
                JamSpell
              </a>
              {' '}
              model trained on approximately 67 thousand words.
            </p>
          </div>
          )}
        </div>

        <div className="about-section">
          <h2 className="about" onClick={() => toggleSection('contact')}>
            Contact
          </h2>
          {selectedSection === 'contact' && (
          <div className="about-answer">
            <p>
              If you want to know more about this project, please contact
              {' '}
              <a
                className="actual-link"
                href="https://profiles.auckland.ac.nz/ake-nicholas"
                target="_blank"
                rel="noreferrer"
              >
                Dr. Sally Akevai Nicholas
              </a>
              .
            </p>
            <p>
              If you have inquiries about the website or directly about the algorithms, please contact
              {' '}
              <a
                className="actual-link"
                href="https://linguistics.dartmouth.edu/people/rolando-coto-solano"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Rolando Coto-Solano
              </a>
              .
            </p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

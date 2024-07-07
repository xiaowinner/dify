const translation = {
  api: {
    success: 'Sukces',
    actionSuccess: 'Akcja powiodła się',
    saved: 'Zapisane',
    create: 'Utworzono',
    remove: 'Usunięto',
  },
  operation: {
    create: 'Utwórz',
    confirm: 'Potwierdź',
    cancel: 'Anuluj',
    clear: 'Wyczyść',
    save: 'Zapisz',
    edit: 'Edytuj',
    add: 'Dodaj',
    added: 'Dodano',
    refresh: 'Odśwież',
    reset: 'Resetuj',
    search: 'Szukaj',
    change: 'Zmień',
    remove: 'Usuń',
    send: 'Wyślij',
    copy: 'Kopiuj',
    lineBreak: 'Złamanie linii',
    sure: 'Jestem pewien',
    download: 'Pobierz',
    delete: 'Usuń',
    settings: 'Ustawienia',
    setup: 'Konfiguruj',
    getForFree: 'Zdobądź za darmo',
    reload: 'Przeładuj',
    ok: 'OK',
    log: 'Dziennik',
    learnMore: 'Dowiedz się więcej',
    params: 'Parametry',
    duplicate: 'Duplikuj',
    rename: 'Zmień nazwę',
  },
  placeholder: {
    input: 'Proszę wprowadzić',
    select: 'Proszę wybrać',
  },
  voice: {
    language: {
      zhHans: 'Chiński',
      zhHant: 'Chiński tradycyjny',
      enUS: 'Angielski',
      deDE: 'Niemiecki',
      frFR: 'Francuski',
      esES: 'Hiszpański',
      itIT: 'Włoski',
      thTH: 'Tajski',
      idID: 'Indonezyjski',
      jaJP: 'Japoński',
      koKR: 'Koreański',
      ptBR: 'Portugalski',
      ruRU: 'Rosyjski',
      ukUA: 'Ukraiński',
      viVN: 'Wietnamski',
      plPL: 'Polski',
    },
  },
  unit: {
    char: 'znaki',
  },
  actionMsg: {
    noModification: 'W tej chwili brak zmian.',
    modifiedSuccessfully: 'Zmodyfikowano pomyślnie',
    modifiedUnsuccessfully: 'Nie udało się zmodyfikować',
    copySuccessfully: 'Skopiowano pomyślnie',
    paySucceeded: 'Płatność zakończona sukcesem',
    payCancelled: 'Płatność anulowana',
    generatedSuccessfully: 'Wygenerowano pomyślnie',
    generatedUnsuccessfully: 'Nie udało się wygenerować',
  },
  model: {
    params: {
      temperature: 'Temperatura',
      temperatureTip:
        'Kontroluje przypadkowość: obniżenie powoduje mniej przypadkowych uzupełnień. Gdy temperatura zbliża się do zera, model staje się deterministyczny i powtarzalny.',
      top_p: 'Top P',
      top_pTip:
        'Kontroluje różnorodność poprzez próbkowanie jądra: 0,5 oznacza, że rozważane są połowa wszystkich opcji ważonych prawdopodobieństwem.',
      presence_penalty: 'Kara za obecność',
      presence_penaltyTip:
        'Jak bardzo karać nowe tokeny w zależności od tego, czy pojawiły się już w tekście.\nZwiększa prawdopodobieństwo, że model zacznie rozmawiać o nowych tematach.',
      frequency_penalty: 'Kara za częstotliwość',
      frequency_penaltyTip:
        'Jak bardzo karać nowe tokeny bazując na ich dotychczasowej częstotliwości w tekście.\nZmniejsza prawdopodobieństwo, że model będzie powtarzał tę samą linię dosłownie.',
      max_tokens: 'Maksymalna liczba tokenów',
      max_tokensTip:
        'Służy do ograniczania maksymalnej długości odpowiedzi w tokenach. \nWiększe wartości mogą ograniczyć miejsce na słowa wstępne, dzienniki rozmów i Wiedzę. \nZaleca się ustawienie go poniżej dwóch trzecich\ngpt-4-1106-preview, gpt-4-vision-preview maksymalna liczba tokenów (input 128k output 4k)',
      maxTokenSettingTip:
        'Twoje ustawienie maksymalnej liczby tokenów jest wysokie, potencjalnie ograniczając miejsce na monity, zapytania i dane. Rozważ ustawienie go poniżej 2/3.',
      setToCurrentModelMaxTokenTip:
        'Maksymalna liczba tokenów została zaktualizowana do 80% maksymalnej liczby tokenów obecnego modelu {{maxToken}}.',
      stop_sequences: 'Sekwencje zatrzymujące',
      stop_sequencesTip:
        'Do czterech sekwencji, w których API przestanie generować dalsze tokeny. Zwrócony tekst nie będzie zawierał sekwencji zatrzymującej.',
      stop_sequencesPlaceholder: 'Wpisz sekwencję i naciśnij Tab',
    },
    tone: {
      Creative: 'Kreatywny',
      Balanced: 'Zrównoważony',
      Precise: 'Precyzyjny',
      Custom: 'Niestandardowy',
    },
    addMoreModel: 'Przejdź do ustawień, aby dodać więcej modeli',
  },
  menus: {
    status: 'beta',
    explore: 'Eksploruj',
    apps: 'Studio',
    plugins: 'Pluginy',
    pluginsTips:
      'Integruj pluginy stron trzecich lub twórz pluginy AI kompatybilne z ChatGPT.',
    datasets: 'Wiedza',
    datasetsTips:
      'NADCHODZI: Importuj swoje własne dane tekstowe lub wpisuj dane w czasie rzeczywistym przez Webhook, aby wzmocnić kontekst LLM.',
    newApp: 'Nowa aplikacja',
    newDataset: 'Utwórz Wiedzę',
    tools: 'Narzędzia',
  },
  userProfile: {
    settings: 'Ustawienia',
    workspace: 'Przestrzeń robocza',
    createWorkspace: 'Utwórz przestrzeń roboczą',
    helpCenter: 'Pomoc',
    roadmapAndFeedback: 'Opinie',
    community: 'Społeczność',
    about: 'O',
    logout: 'Wyloguj się',
  },
  settings: {
    accountGroup: 'KONTO',
    workplaceGroup: 'PRZESTRZEŃ ROBOCZA',
    account: 'Moje konto',
    members: 'Członkowie',
    billing: 'Rozliczenia',
    integrations: 'Integracje',
    language: 'Język',
    provider: 'Dostawca modelu',
    dataSource: 'Źródło danych',
    plugin: 'Pluginy',
    apiBasedExtension: 'Rozszerzenie API',
  },
  account: {
    avatar: 'Awatar',
    name: 'Nazwa',
    email: 'Email',
    password: 'Hasło',
    passwordTip:
      'Możesz ustawić stałe hasło, jeśli nie chcesz używać tymczasowych kodów logowania',
    setPassword: 'Ustaw hasło',
    resetPassword: 'Zresetuj hasło',
    currentPassword: 'Obecne hasło',
    newPassword: 'Nowe hasło',
    confirmPassword: 'Potwierdź hasło',
    notEqual: 'Dwa hasła są różne.',
    langGeniusAccount: 'Konto Cyclical',
    langGeniusAccountTip: 'Twoje konto Cyclical i powiązane dane użytkownika.',
    editName: 'Edytuj nazwę',
    showAppLength: 'Pokaż {{length}} aplikacje',
    delete: 'Usuń konto',
    deleteTip: 'Usunięcie konta spowoduje trwałe usunięcie wszystkich danych i nie będzie można ich odzyskać.',
    deleteConfirmTip: 'Aby potwierdzić, wyślij następujące informacje z zarejestrowanego adresu e-mail na adres ',
  },
  members: {
    team: 'Zespół',
    invite: 'Dodaj',
    name: 'NAZWA',
    lastActive: 'OSTATNIA AKTYWNOŚĆ',
    role: 'ROLE',
    pending: 'Oczekujący...',
    owner: 'Właściciel',
    admin: 'Admin',
    adminTip: 'Może tworzyć aplikacje i zarządzać ustawieniami zespołu',
    normal: 'Normalny',
    normalTip: 'Może tylko korzystać z aplikacji, nie może tworzyć aplikacji',
    editor: 'Edytor',
    editorTip: 'Może tworzyć i edytować aplikacje, ale nie zarządzać ustawieniami zespołu',
    inviteTeamMember: 'Dodaj członka zespołu',
    inviteTeamMemberTip:
      'Mogą uzyskać bezpośredni dostęp do danych Twojego zespołu po zalogowaniu.',
    email: 'Email',
    emailInvalid: 'Nieprawidłowy format e-maila',
    emailPlaceholder: 'Proszę podać adresy e-mail',
    sendInvite: 'Wyślij zaproszenie',
    invitedAsRole: 'Zaproszony jako użytkownik typu {{role}}',
    invitationSent: 'Zaproszenie wysłane',
    invitationSentTip:
      'Zaproszenie zostało wysłane, a oni mogą zalogować się do Cyclical, aby uzyskać dostęp do danych Twojego zespołu.',
    invitationLink: 'Link zaproszenia',
    failedinvitationEmails: 'Poniższe osoby nie zostały pomyślnie zaproszone',
    ok: 'OK',
    removeFromTeam: 'Usuń z zespołu',
    removeFromTeamTip: 'Usunie dostęp do zespołu',
    setAdmin: 'Ustaw jako administratora',
    setMember: 'Ustaw jako zwykłego członka',
    setEditor: 'Ustaw jako edytora',
    disinvite: 'Anuluj zaproszenie',
    deleteMember: 'Usuń członka',
    you: '(Ty)',
  },
  integrations: {
    connected: 'Połączony',
    google: 'Google',
    googleAccount: 'Zaloguj się przy użyciu konta Google',
    github: 'GitHub',
    githubAccount: 'Zaloguj się przy użyciu konta GitHub',
    connect: 'Połącz',
  },
  language: {
    displayLanguage: 'Język interfejsu',
    timezone: 'Strefa czasowa',
  },
  provider: {
    apiKey: 'Klucz API',
    enterYourKey: 'Wprowadź tutaj swój klucz API',
    invalidKey: 'Nieprawidłowy klucz API OpenAI',
    validatedError: 'Weryfikacja nie powiodła się: ',
    validating: 'Weryfikowanie klucza...',
    saveFailed: 'Zapis klucza API nie powiódł się',
    apiKeyExceedBill: 'Ten KLUCZ API nie ma dostępnych limitów, przeczytaj',
    addKey: 'Dodaj klucz',
    comingSoon: 'Już wkrótce',
    editKey: 'Edytuj',
    invalidApiKey: 'Nieprawidłowy klucz API',
    azure: {
      apiBase: 'Podstawa API',
      apiBasePlaceholder:
        'Adres URL podstawowy Twojego końcowego punktu Azure OpenAI.',
      apiKey: 'Klucz API',
      apiKeyPlaceholder: 'Wprowadź tutaj swój klucz API',
      helpTip: 'Dowiedz się więcej o usłudze Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'Hostowany OpenAI',
      onTrial: 'NA PROBĘ',
      exhausted: 'WYCZERPANY LIMIT',
      desc: 'Usługa hostowania OpenAI dostarczana przez Cyclical pozwala korzystać z modeli takich jak GPT-3.5. Przed wyczerpaniem limitu próbnego należy skonfigurować inne dostawców modeli.',
      callTimes: 'Czasy wywołań',
      usedUp: 'Limit próbny został wyczerpany. Dodaj własnego dostawcę modeli.',
      useYourModel: 'Aktualnie używany jest własny dostawca modeli.',
      close: 'Zamknij',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'NA PROBĘ',
      exhausted: 'WYCZERPANY LIMIT',
      desc: 'Potężny model, który doskonale sprawdza się w szerokim spektrum zadań, od zaawansowanego dialogu i generowania treści twórczych po szczegółowe instrukcje.',
      callTimes: 'Czasy wywołań',
      usedUp: 'Limit próbny został wyczerpany. Dodaj własnego dostawcę modeli.',
      useYourModel: 'Aktualnie używany jest własny dostawca modeli.',
      close: 'Zamknij',
    },
    anthropic: {
      using: 'Zdolność do osadzania jest używana',
      enableTip:
        'Aby włączyć model Anthropica, musisz najpierw powiązać się z usługą OpenAI lub Azure OpenAI.',
      notEnabled: 'Nie włączono',
      keyFrom: 'Pobierz swój klucz API od Anthropic',
    },
    encrypted: {
      front: 'Twój KLUCZ API będzie szyfrowany i przechowywany za pomocą',
      back: ' technologii.',
    },
  },
  modelProvider: {
    notConfigured:
      'Systemowy model nie został jeszcze w pełni skonfigurowany, co może skutkować niedostępnością niektórych funkcji.',
    systemModelSettings: 'Ustawienia modelu systemowego',
    systemModelSettingsLink:
      'Dlaczego konieczne jest skonfigurowanie modelu systemowego?',
    selectModel: 'Wybierz swój model',
    setupModelFirst: 'Proszę najpierw skonfigurować swój model',
    systemReasoningModel: {
      key: 'Model wnioskowania systemowego',
      tip: 'Ustaw domyślny model wnioskowania do użytku przy tworzeniu aplikacji, a także cechy takie jak generowanie nazw dialogów i sugestie następnego pytania będą również korzystać z domyślnego modelu wnioskowania.',
    },
    embeddingModel: {
      key: 'Model osadzania',
      tip: 'Ustaw domyślny model do przetwarzania osadzania dokumentów wiedzy; zarówno pozyskiwanie, jak i importowanie wiedzy wykorzystują ten model osadzania do przetwarzania wektorowego. Zmiana spowoduje niezgodność wymiarów wektorów między importowaną wiedzą a pytaniem, co skutkować będzie niepowodzeniem w pozyskiwaniu. Aby uniknąć niepowodzeń, prosimy nie zmieniać tego modelu dowolnie.',
      required: 'Model osadzania jest wymagany',
    },
    speechToTextModel: {
      key: 'Model mowy na tekst',
      tip: 'Ustaw domyślny model do przetwarzania mowy na tekst w rozmowach.',
    },
    ttsModel: {
      key: 'Model tekstu na mowę',
      tip: 'Ustaw domyślny model dla konwersji tekstu na mowę w rozmowach.',
    },
    rerankModel: {
      key: 'Model ponownego rankingu',
      tip: 'Model ponownego rankingu zmieni kolejność listy dokumentów kandydatów na podstawie semantycznego dopasowania z zapytaniem użytkownika, poprawiając wyniki rankingu semantycznego',
    },
    quota: 'Limit',
    searchModel: 'Model wyszukiwania',
    noModelFound: 'Nie znaleziono modelu dla {{model}}',
    models: 'Modele',
    showMoreModelProvider: 'Pokaż więcej dostawców modeli',
    selector: {
      tip: 'Ten model został usunięty. Proszę dodać model lub wybrać inny model.',
      emptyTip: 'Brak dostępnych modeli',
      emptySetting: 'Przejdź do ustawień, aby skonfigurować',
      rerankTip: 'Proszę skonfigurować model ponownego rankingu',
    },
    card: {
      quota: 'LIMIT',
      onTrial: 'Na próbę',
      paid: 'Płatny',
      quotaExhausted: 'Wyczerpany limit',
      callTimes: 'Czasy wywołań',
      tokens: 'Tokeny',
      buyQuota: 'Kup limit',
      priorityUse: 'Używanie z priorytetem',
      removeKey: 'Usuń klucz API',
      tip: 'Priorytet zostanie nadany płatnemu limitowi. Po wyczerpaniu limitu próbnego zostanie użyty limit płatny.',
    },
    item: {
      deleteDesc:
        '{{modelName}} są używane jako modele wnioskowania systemowego. Niektóre funkcje mogą nie być dostępne po usunięciu. Proszę potwierdź.',
      freeQuota: 'LIMIT GRATIS',
    },
    addApiKey: 'Dodaj swój klucz API',
    invalidApiKey: 'Nieprawidłowy klucz API',
    encrypted: {
      front: 'Twój KLUCZ API będzie szyfrowany i przechowywany za pomocą',
      back: ' technologii.',
    },
    freeQuota: {
      howToEarn: 'Jak zdobyć',
    },
    addMoreModelProvider: 'DODAJ WIĘCEJ DOSTAWCÓW MODELI',
    addModel: 'Dodaj model',
    modelsNum: '{{num}} Modele',
    showModels: 'Pokaż modele',
    showModelsNum: 'Pokaż {{num}} modele',
    collapse: 'Zwiń',
    config: 'Konfiguracja',
    modelAndParameters: 'Model i parametry',
    model: 'Model',
    featureSupported: '{{feature}} obsługiwane',
    callTimes: 'Czasy wywołań',
    credits: 'Kredyty wiadomości',
    buyQuota: 'Kup limit',
    getFreeTokens: 'Odbierz darmowe tokeny',
    priorityUsing: 'Priorytetyzacja użycia',
    deprecated: 'Przestarzałe',
    confirmDelete: 'potwierdzić usunięcie?',
    quotaTip: 'Pozostałe dostępne darmowe tokeny',
    loadPresets: 'Załaduj ustawienia wstępne',
    parameters: 'PARAMETRY',
  },
  dataSource: {
    add: 'Dodaj źródło danych',
    connect: 'Połącz',
    notion: {
      title: 'Notion',
      description: 'Korzystanie z Notion jako źródła danych dla Wiedzy.',
      connectedWorkspace: 'Połączona przestrzeń robocza',
      addWorkspace: 'Dodaj przestrzeń roboczą',
      connected: 'Połączono',
      disconnected: 'Rozłączono',
      changeAuthorizedPages: 'Zmień uprawnione strony',
      pagesAuthorized: 'Strony autoryzowane',
      sync: 'Synchronizuj',
      remove: 'Usuń',
      selector: {
        pageSelected: 'Zaznaczone strony',
        searchPages: 'Szukaj stron...',
        noSearchResult: 'Brak wyników wyszukiwania',
        addPages: 'Dodaj strony',
        preview: 'PODGLĄD',
      },
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'Klucz API',
      apiKeyPlaceholder: 'Wprowadź swój klucz API',
      keyFrom: 'Pobierz swój klucz SerpAPI ze strony konta SerpAPI',
    },
  },
  apiBasedExtension: {
    title:
      'Rozszerzenia oparte na interfejsie API zapewniają scentralizowane zarządzanie interfejsami API, upraszczając konfigurację dla łatwego użytkowania w aplikacjach Cyclical.',
    link: 'Dowiedz się, jak opracować własne rozszerzenie interfejsu API.',
    linkUrl: 'https://cyclical.cn/features/extension/api_based_extension',
    add: 'Dodaj rozszerzenie interfejsu API',
    selector: {
      title: 'Rozszerzenie interfejsu API',
      placeholder: 'Wybierz rozszerzenie interfejsu API',
      manage: 'Zarządzaj rozszerzeniem interfejsu API',
    },
    modal: {
      title: 'Dodaj rozszerzenie interfejsu API',
      editTitle: 'Edytuj rozszerzenie interfejsu API',
      name: {
        title: 'Nazwa',
        placeholder: 'Proszę wprowadź nazwę',
      },
      apiEndpoint: {
        title: 'Koniec API',
        placeholder: 'Proszę wprowadź koniec API',
      },
      apiKey: {
        title: 'Klucz API',
        placeholder: 'Proszę wprowadź klucz API',
        lengthError: 'Długość klucza API nie może być mniejsza niż 5 znaków',
      },
    },
    type: 'Typ',
  },
  about: {
    changeLog: 'Dziennik zmian',
    updateNow: 'Aktualizuj teraz',
    nowAvailable: 'Cyclical {{version}} jest teraz dostępny.',
    latestAvailable: 'Cyclical {{version}} jest najnowszą dostępną wersją.',
  },
  appMenus: {
    overview: 'Przegląd',
    promptEng: 'Orkiestracja',
    apiAccess: 'Dostęp API',
    logAndAnn: 'Logi i ogł.',
    logs: 'Logi',
  },
  environment: {
    testing: 'TESTOWANIE',
    development: 'ROZWOJOWA',
  },
  appModes: {
    completionApp: 'Generator tekstu',
    chatApp: 'Aplikacja czatowa',
  },
  datasetMenus: {
    documents: 'Dokumenty',
    hitTesting: 'Testowanie poboru',
    settings: 'Ustawienia',
    emptyTip:
      'Wiedza nie została powiązana, przejdź do aplikacji lub wtyczki, aby ukończyć powiązanie.',
    viewDoc: 'Zobacz dokumentację',
    relatedApp: 'powiązane aplikacje',
  },
  voiceInput: {
    speaking: 'Mów teraz...',
    converting: 'Konwertowanie na tekst...',
    notAllow: 'mikrofon nieautoryzowany',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Tekst-Davinci-003',
    'text-embedding-ada-002': 'Tekst-Wan-Ada-002',
    'whisper-1': 'Szept-1',
    'claude-instant-1': 'Claude-Natychmiastowy',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Zmień nazwę rozmowy',
    conversationName: 'Nazwa rozmowy',
    conversationNamePlaceholder: 'Proszę wprowadź nazwę rozmowy',
    conversationNameCanNotEmpty: 'Nazwa rozmowy wymagana',
    citation: {
      title: 'Cytaty',
      linkToDataset: 'Link do Wiedzy',
      characters: 'Postacie:',
      hitCount: 'Liczba trafień:',
      vectorHash: 'Wektor hash:',
      hitScore: 'Wynik trafień:',
    },
  },
  promptEditor: {
    placeholder:
      'Wpisz swoje słowo kluczowe tutaj, wprowadź \'{\' aby wstawić zmienną, wprowadź \'/\' aby wstawić blok treści słownika',
    context: {
      item: {
        title: 'Kontekst',
        desc: 'Wstaw szablon kontekstu',
      },
      modal: {
        title: '{{num}} Wiedzy w Kontekście',
        add: 'Dodaj Kontekst ',
        footer: 'Możesz zarządzać kontekstami poniżej w sekcji Kontekstów.',
      },
    },
    history: {
      item: {
        title: 'Historia rozmów',
        desc: 'Wstaw szablon historycznej wiadomości',
      },
      modal: {
        title: 'PRZYKŁAD',
        user: 'Cześć',
        assistant: 'Cześć! W czym mogę pomóc?',
        edit: 'Edytuj nazwy ról rozmów',
      },
    },
    variable: {
      item: {
        title: 'Zmienne i Narzędzia Zewnętrzne',
        desc: 'Wstaw Zmienne i Narzędzia Zewnętrzne',
      },
      outputToolDisabledItem: {
        title: 'Zmienne',
        desc: 'Wstaw Zmienne',
      },
      modal: {
        add: 'Nowa zmienna',
        addTool: 'Nowe narzędzie',
      },
    },
    query: {
      item: {
        title: 'Zapytanie',
        desc: 'Wstaw szablon zapytania użytkownika',
      },
    },
    existed: 'Już istnieje w poleceniu',
  },
  imageUploader: {
    uploadFromComputer: 'Załaduj z komputera',
    uploadFromComputerReadError: 'Błąd odczytu obrazu, spróbuj ponownie.',
    uploadFromComputerUploadError:
      'Błąd przesyłania obrazu, prześlij go ponownie.',
    uploadFromComputerLimit:
      'Obrazy do przesłania nie mogą przekroczyć {{size}} MB',
    pasteImageLink: 'Wklej link do obrazu',
    pasteImageLinkInputPlaceholder: 'Wklej tutaj link do obrazu',
    pasteImageLinkInvalid: 'Nieprawidłowy link obrazu',
    imageUpload: 'Przesyłanie obrazu',
  },
  tag: {
    placeholder: 'Wszystkie tagi',
    addNew: 'Dodaj nowy tag',
    noTag: 'Brak tagów',
    noTagYet: 'Brak tagów jeszcze',
    addTag: 'Dodaj tagi',
    editTag: 'Edytuj tagi',
    manageTags: 'Zarządzaj Tagami',
    selectorPlaceholder: 'Wpisz, aby wyszukać lub utworzyć',
    create: 'Utwórz',
    delete: 'Usuń tag',
    deleteTip: 'Ten tag jest używany, czy chcesz go usunąć?',
    created: 'Tag został pomyślnie utworzony',
    failed: 'Nie udało się utworzyć tagu',
  },
}

export default translation

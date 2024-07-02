const translation = {
  pageTitle: {
    line1: 'INVITATION',
    line2: 'Ingénierie',
  },
  orchestrate: 'Orchestrer',
  promptMode: {
    simple: 'Passez en Mode Expert pour modifier l\'intégralité du PROMPT',
    advanced: 'Mode Expert',
    switchBack: 'Revenir en arrière',
    advancedWarning: {
      title: 'Vous êtes passé en Mode Expert, et une fois que vous modifiez le PROMPT, vous NE POUVEZ PAS revenir au mode basique.',
      description: 'En mode Expert, vous pouvez modifier l\'intégralité du PROMPT.',
      learnMore: 'En savoir plus',
      ok: 'D\'accord',
    },
    operation: {
      addMessage: 'Ajouter un message',
    },
    contextMissing: 'Le composant de contexte est manquant, l\'efficacité de la suggestion peut ne pas être bonne.',
  },
  operation: {
    applyConfig: 'Publier',
    resetConfig: 'Réinitialiser',
    debugConfig: 'Déboguer',
    addFeature: 'Ajouter une fonctionnalité',
    automatic: 'Automatique',
    stopResponding: 'Arrêtez de répondre',
    agree: 'comme',
    disagree: 'déteste',
    cancelAgree: 'Annuler comme',
    cancelDisagree: 'Annuler le dislike',
    userAction: 'Utilisateur',
  },
  notSetAPIKey: {
    title: 'La clé du fournisseur LLM n\'a pas été définie',
    trailFinished: 'Parcours terminé',
    description: 'La clé du fournisseur LLM n\'a pas été définie, et elle doit être définie avant le débogage.',
    settingBtn: 'Aller aux paramètres',
  },
  trailUseGPT4Info: {
    title: 'Ne prend pas en charge gpt-4 pour le moment',
    description: 'Utilisez gpt-4, veuillez définir la clé API.',
  },
  feature: {
    groupChat: {
      title: 'Amélioration de chat',
      description: 'Ajouter des paramètres de pré-conversation pour les applications peut améliorer l\'expérience utilisateur.',
    },
    groupExperience: {
      title: 'Amélioration de l\'expérience',
    },
    conversationOpener: {
      title: 'Convertisseurs de conversation',
      description: 'Dans une application de chat, la première phrase que l\'IA prononce activement à l\'utilisateur est généralement utilisée comme message de bienvenue.',
    },
    suggestedQuestionsAfterAnswer: {
      title: 'Suivi',
      description: 'La configuration de la suggestion des prochaines questions peut offrir aux utilisateurs une meilleure discussion.',
      resDes: '3 suggestions pour la prochaine question de l\'utilisateur.',
      tryToAsk: 'Essayez de demander',
    },
    moreLikeThis: {
      title: 'Plus comme ça',
      description: 'Générez plusieurs textes à la fois, puis modifiez et continuez à générer',
      generateNumTip: 'Nombre de chaque temps généré',
      tip: 'L\'utilisation de cette fonctionnalité entraînera un surcoût de tokens supplémentaires',
    },
    speechToText: {
      title: 'Discours en Texte',
      description: 'Une fois activé, vous pouvez utiliser l\'entrée vocale.',
      resDes: 'La saisie vocale est activée',
    },
    textToSpeech: {
      title: 'Texte à la parole',
      description: 'Une fois activé, le texte peut être converti en parole.',
      resDes: 'La Texte à Audio est activée',
    },
    citation: {
      title: 'Citations et Attributions',
      description: 'Une fois activé, affichez le document source et la section attribuée du contenu généré.',
      resDes: 'Les citations et attributions sont activées',
    },
    annotation: {
      title: 'Réponse d\'Annotation',
      description: 'Vous pouvez manuellement ajouter une réponse de haute qualité au cache pour une correspondance prioritaire avec des questions d\'utilisateur similaires.',
      resDes: 'La réponse d\'annotation est activée',
      scoreThreshold: {
        title: 'Seuil de Score',
        description: 'Utilisé pour définir le seuil de similarité pour la réponse d\'annotation.',
        easyMatch: 'Correspondance Facile',
        accurateMatch: 'Correspondance précise',
      },
      matchVariable: {
        title: 'Correspondance de Variable',
        choosePlaceholder: 'Choisissez la variable correspondante',
      },
      cacheManagement: 'Annotations',
      cached: 'Annoté',
      remove: 'Supprimer',
      removeConfirm: 'Supprimer cette annotation ?',
      add: 'Ajouter une annotation',
      edit: 'Modifier l\'annotation',
    },
    dataSet: {
      title: 'Contexte',
      noData: 'Vous pouvez importer des Connaissances comme contexte',
      words: 'Mots',
      textBlocks: 'Blocs de texte',
      selectTitle: 'Sélectionnez la connaissance de référence',
      selected: 'Connaissance sélectionnée',
      noDataSet: 'Aucune connaissance trouvée',
      toCreate: 'Aller à créer',
      notSupportSelectMulti: 'Actuellement, ne prend en charge qu\'une seule Connaissance',
      queryVariable: {
        title: 'Variable de requête',
        tip: 'Cette variable sera utilisée comme entrée de requête pour la récupération du contexte, obtenant des informations contextuelles liées à l\'entrée de cette variable.',
        choosePlaceholder: 'Choisissez la variable de requête',
        noVar: 'Aucune variable',
        noVarTip: 'veuillez créer une variable sous la section Variables',
        unableToQueryDataSet: 'Impossible de questionner la Connaissance',
        unableToQueryDataSetTip: 'Impossible d\'interroger la Connaissance avec succès, veuillez choisir une variable de requête de contexte dans la section contexte.',
        ok: 'D\'accord',
        contextVarNotEmpty: 'la variable de requête de contexte ne peut pas être vide',
        deleteContextVarTitle: 'Supprimer la variable "{{varName}}" ?',
        deleteContextVarTip: 'Cette variable a été définie comme une variable de requête de contexte, et sa suppression affectera l\'utilisation normale de la Connaissance. Si vous devez toujours la supprimer, veuillez la re-sélectionner dans la section contexte.',
      },
    },
    tools: {
      title: 'Outils',
      tips: 'Les outils fournissent une méthode d\'appel API standard, prenant en compte les entrées de l\'utilisateur ou des variables comme paramètres de requête pour interroger des données externes en tant que contexte.',
      toolsInUse: '{{count}} outils en usage',
      modal: {
        title: 'Outil',
        toolType: {
          title: 'Type d\'outil',
          placeholder: 'Veuillez sélectionner le type d\'outil',
        },
        name: {
          title: 'Nom',
          placeholder: 'Veuillez entrer le nom',
        },
        variableName: {
          title: 'Nom de la Variable',
          placeholder: 'Veuillez entrer le nom de la variable',
        },
      },
    },
    conversationHistory: {
      title: 'Historique de Conversation',
      description: 'Définir les noms de préfixe pour les rôles de conversation',
      tip: 'L\'historique de conversation n\'est pas activé, veuillez ajouter <histories> dans le prompt ci-dessus.',
      learnMore: 'En savoir plus',
      editModal: {
        title: 'Modifier les noms de rôles de conversation',
        userPrefix: 'Préfixe utilisateur',
        assistantPrefix: 'Préfixe de l\'assistant',
      },
    },
    toolbox: {
      title: 'BOÎTE À OUTILS',
    },
    moderation: {
      title: 'Modération de contenu',
      description: 'Sécurisez la sortie du modèle en utilisant l\'API de modération ou en conservant une liste de mots sensibles.',
      allEnabled: 'Contenu Entrant/Sortant Activé',
      inputEnabled: 'Contenu Activé',
      outputEnabled: 'Contenu de SORTIE activé',
      modal: {
        title: 'Paramètres de modération de contenu',
        provider: {
          title: 'Fournisseur',
          openai: 'Modération OpenAI',
          openaiTip: {
            prefix: 'La modération d\'OpenAI nécessite une clé API OpenAI configurée dans le',
            suffix: '.',
          },
          keywords: 'Mots-clés',
        },
        keywords: {
          tip: 'Un par ligne, séparés par des sauts de ligne. Jusqu\'à 100 caractères par ligne.',
          placeholder: 'Un par ligne, séparé par des sauts de ligne',
          line: 'Ligne',
        },
        content: {
          input: 'Modérer le contenu INPUT',
          output: 'Modérer le contenu de SORTIE',
          preset: 'Réponses préétablies',
          placeholder: 'Contenu des réponses prédéfinies ici',
          condition: 'Contenu MODÉRÉ pour INPUT et OUTPUT activé au moins une fois',
          fromApi: 'Les réponses prédéfinies sont renvoyées par l\'API',
          errorMessage: 'Les réponses prédéfinies ne peuvent pas être vides',
          supportMarkdown: 'Prise en charge de Markdown',
        },
        openaiNotConfig: {
          before: 'La modération d\'OpenAI nécessite une clé API OpenAI configurée dans le',
          after: 'Sorry, but you didn\'t provide a text to translate. Could you please provide the text?',
        },
      },
    },
  },
  automatic: {
    title: 'Orchestration automatique d\'application',
    description: 'Décrivez votre scénario, Cyclical orchestrera une application pour vous.',
    intendedAudience: 'Qui est le public cible ?',
    intendedAudiencePlaceHolder: 'par exemple. Étudiant',
    solveProblem: 'Quels problèmes espèrent-ils que l\'IA peut résoudre pour eux ?',
    solveProblemPlaceHolder: 'par exemple, Évaluation des performances académiques',
    generate: 'Générer',
    audiencesRequired: 'Audiences requises',
    problemRequired: 'Problème requis',
    resTitle: 'Nous avons orchestré l\'application suivante pour vous.',
    apply: 'Appliquez cette orchestration',
    noData: 'Décrivez votre cas d\'utilisation sur la gauche, l\'aperçu de l\'orchestration s\'affichera ici.',
    loading: 'Orchestration de l\'application pour vous...',
    overwriteTitle: 'Remplacer la configuration existante ?',
    overwriteMessage: 'L\'application de cette orchestration remplacera la configuration existante.',
  },
  resetConfig: {
    title: 'Confirmer la réinitialisation ?',
    message:
      'Réinitialiser supprime les modifications, en restaurant la dernière configuration publiée.',
  },
  errorMessage: {
    nameOfKeyRequired: 'name of the key: {{key}} required',
    valueOfVarRequired: 'La valeur de {{key}} ne peut pas être vide',
    queryRequired: 'Le texte de la requête est requis.',
    waitForResponse:
      'Veuillez attendre que la réponse au message précédent soit terminée.',
    waitForBatchResponse:
      'Veuillez attendre que la réponse à la tâche en lot soit terminée.',
    notSelectModel: 'Veuillez choisir un modèle',
    waitForImgUpload: 'Veuillez attendre que l\'image soit téléchargée',
  },
  chatSubTitle: 'Instructions',
  completionSubTitle: 'Indicatif de Prompt',
  promptTip:
    'Les prompts guident les réponses de l\'IA avec des instructions et des contraintes. Insérez des variables comme {{input}}. Ce prompt ne sera pas visible pour les utilisateurs.',
  formattingChangedTitle: 'Formatage modifié',
  formattingChangedText:
    'La modification du formatage réinitialisera la zone de débogage, êtes-vous sûr ?',
  variableTitle: 'Variables',
  variableTip:
    'Les utilisateurs remplissent des variables dans un formulaire, remplaçant automatiquement les variables dans le prompt.',
  notSetVar: 'Les variables permettent aux utilisateurs d\'introduire des mots de prompt ou des remarques d\'ouverture lors du remplissage des formulaires. Vous pouvez essayer de saisir "{{input}}" dans les mots de prompt.',
  autoAddVar: 'Des variables indéfinies référencées dans le pre-prompt, voulez-vous les ajouter dans le formulaire d\'entrée de l\'utilisateur ?',
  variableTable: {
    key: 'Clé Variable',
    name: 'Nom du champ d\'entrée de l\'utilisateur',
    optional: 'Facultatif',
    type: 'Type d\'Entrée',
    action: 'Actions',
    typeString: 'Chaîne',
    typeSelect: 'Sélectionner',
  },
  varKeyError: {
    canNoBeEmpty: 'La clé variable ne peut pas être vide',
    tooLong: 'Variable key: {{key}} too length. Can not be longer then 30 characters',
    notValid: 'Variable key: {{key}} is invalid. Can only contain letters, numbers, and underscores',
    notStartWithNumber: 'Variable key: {{key}} can not start with a number',
    keyAlreadyExists: 'Variable key: :{{key}} already exists',
  },
  otherError: {
    promptNoBeEmpty: 'Le prompt ne peut pas être vide',
    historyNoBeEmpty: 'L\'historique de la conversation doit être défini dans le prompt',
    queryNoBeEmpty: 'La requête doit être définie dans le prompt',
  },
  variableConig: {
    'addModalTitle': 'Add Input Field',
    'editModalTitle': 'Edit Input Field',
    'description': 'Setting for variable {{varName}}',
    'fieldType': 'Field type',
    'string': 'Short Text',
    'text-input': 'Short Text',
    'paragraph': 'Paragraph',
    'select': 'Select',
    'number': 'Number',
    'notSet': 'Not set, try typing {{input}} in the prefix prompt',
    'stringTitle': 'Form text box options',
    'maxLength': 'Max length',
    'options': 'Options',
    'addOption': 'Add option',
    'apiBasedVar': 'API-based Variable',
    'varName': 'Variable Name',
    'labelName': 'Label Name',
    'inputPlaceholder': 'Please input',
    'required': 'Required',
    'errorMsg': {
      varNameRequired: 'Variable name is required',
      labelNameRequired: 'Label name is required',
      varNameCanBeRepeat: 'Variable name can not be repeated',
      atLeastOneOption: 'At least one option is required',
      optionRepeat: 'Has repeat options',
    },
  },
  vision: {
    name: 'Vision',
    description: 'Enable Vision permettra au modèle de prendre des images et de répondre à des questions à leur sujet.',
    settings: 'Paramètres',
    visionSettings: {
      title: 'Paramètres de Vision',
      resolution: 'Résolution',
      resolutionTooltip: `low res will allow model receive a low-res 512 x 512 version of the image, and represent the image with a budget of 65 tokens. This allows the API to return faster responses and consume fewer input tokens for use cases that do not require high detail.
      \n
      high res will first allows the model to see the low res image and then creates detailed crops of input images as 512px squares based on the input image size. Each of the detailed crops uses twice the token budget for a total of 129 tokens.`,
      high: 'Élevé',
      low: 'Faible',
      uploadMethod: 'Méthode de Téléchargement',
      both: 'Les deux',
      localUpload: 'Téléchargement Local',
      url: 'URL',
      uploadLimit: 'Limite de téléchargement',
    },
  },
  voice: {
    name: 'Voix',
    defaultDisplay: 'Voix par défaut',
    description: 'Paramètres de la voix de synthèse vocale',
    settings: 'Paramètres',
    voiceSettings: {
      title: 'Paramètres de voix',
      language: 'Langue',
      resolutionTooltip: 'Support de la langue pour la voix de synthèse de texte.',
      voice: 'Voix',
    },
  },
  openingStatement: {
    title: 'Ouverture de Conversation',
    add: 'Ajouter',
    writeOpener: 'Écrire l\'introduction',
    placeholder: 'Rédigez votre message d\'ouverture ici, vous pouvez utiliser des variables, essayez de taper {{variable}}.',
    openingQuestion: 'Questions d\'ouverture',
    noDataPlaceHolder:
      'Commencer la conversation avec l\'utilisateur peut aider l\'IA à établir une connexion plus proche avec eux dans les applications conversationnelles.',
    varTip: 'Vous pouvez utiliser des variables, essayez de taper {{variable}}',
    tooShort: 'Au moins 20 mots de l\'invite initiale sont requis pour générer des remarques d\'ouverture pour la conversation.',
    notIncludeKey: 'The initial prompt does not include the variable: {{key}}. Please add it to the initial prompt.',
  },
  modelConfig: {
    model: 'Modèle',
    setTone: 'Définir le ton des réponses',
    title: 'Modèle et Paramètres',
    modeType: {
      chat: 'Discussion',
      completion: 'Complet',
    },
  },
  inputs: {
    title: 'Déboguer et Aperçu',
    noPrompt: 'Essayez d\'écrire une proposition dans l\'entrée pré-proposition',
    userInputField: 'Champ de saisie utilisateur',
    noVar: 'Remplissez la valeur de la variable, qui sera automatiquement remplacée dans le mot d\'invite chaque fois qu\'une nouvelle session est démarrée.',
    chatVarTip:
      'Remplissez la valeur de la variable, qui sera automatiquement remplacée dans le mot d\'invite chaque fois qu\'une nouvelle session est démarrée',
    completionVarTip:
      'Remplissez la valeur de la variable, qui sera automatiquement remplacée dans les mots de l\'invite chaque fois qu\'une question est soumise.',
    previewTitle: 'Aperçu de la prompte',
    queryTitle: 'Contenu de la requête',
    queryPlaceholder: 'Veuillez entrer le texte de la demande.',
    run: 'EXÉCUTER',
  },
  result: 'Texte de sortie',
  datasetConfig: {
    settingTitle: 'Paramètres de récupération',
    knowledgeTip: 'Cliquez sur le bouton “+” pour ajouter des connaissances',
    retrieveOneWay: {
      title: 'Récupération N-vers-1',
      description: 'En fonction de l\'intention de l\'utilisateur et des descriptions de Connaissance, l\'Agent sélectionne de manière autonome la meilleure Connaissance pour interroger. Idéal pour les applications avec une Connaissance distincte et limitée.',
    },
    retrieveMultiWay: {
      title: 'Récupération multi-chemins',
      description: 'En fonction de l\'intention de l\'utilisateur, interroge toutes les connaissances, récupère le texte pertinent de plusieurs sources et sélectionne les meilleurs résultats correspondant à la requête de l\'utilisateur après réordonnancement. La configuration de l\'API du modèle de réordonnancement est requise',
    },
    rerankModelRequired: 'Un modèle de réorganisation est nécessaire',
    params: 'Paramètres',
    top_k: 'Top K',
    top_kTip: 'Utilisé pour filtrer les morceaux qui sont les plus similaires aux questions de l\'utilisateur. Le système ajustera également dynamiquement la valeur de Top K, selon max_tokens du modèle sélectionné.',
    score_threshold: 'Seuil de Score',
    score_thresholdTip: 'Utilisé pour définir le seuil de similarité pour le filtrage des morceaux.',
    retrieveChangeTip: 'La modification du mode d\'indexation et du mode de récupération peut affecter les applications associées à cette Connaissance.',
  },
  debugAsSingleModel: 'Déboguer comme Modèle Unique',
  debugAsMultipleModel: 'Déboguer en tant que Modèles Multiples',
  duplicateModel: 'Dupliquer',
  publishAs: 'Publier comme',
  assistantType: {
    name: 'Type d\'Assistant',
    chatAssistant: {
      name: 'Assistant de Base',
      description: 'Construisez un assistant basé sur le chat en utilisant un grand modèle de langage',
    },
    agentAssistant: {
      name: 'Assistant Agent',
      description: 'Construisez un Agent intelligent qui peut choisir de manière autonome des outils pour accomplir les tâches',
    },
  },
  agent: {
    agentMode: 'Mode Agent',
    agentModeDes: 'Définissez le type de mode d\'inférence pour l\'agent',
    agentModeType: {
      ReACT: 'RéAgir',
      functionCall: 'Appel de fonction',
    },
    setting: {
      name: 'Paramètres de l\'Agent',
      description: 'Les paramètres de l\'Assistant Agent permettent de définir le mode de l\'agent et des fonctionnalités avancées comme les prompts intégrés, uniquement disponibles dans le type Agent.',
      maximumIterations: {
        name: 'Nombre Maximum d\'Itérations',
        description: 'Limiter le nombre d\'itérations qu\'un assistant agent peut exécuter',
      },
    },
    buildInPrompt: 'Prompt Intégré',
    firstPrompt: 'Première Prompte',
    nextIteration: 'Prochaine Itération',
    promptPlaceholder: 'Écrivez votre prompt ici',
    tools: {
      name: 'Outils',
      description: 'L\'utilisation d\'outils peut étendre les capacités des LLM, comme la recherche sur internet ou l\'exécution de calculs scientifiques.',
      enabled: 'Activé',
    },
  },
}

export default translation

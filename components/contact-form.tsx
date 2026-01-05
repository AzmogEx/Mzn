"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Heart,
  Users,
  ArrowRight,
  ArrowLeft,
  Send,
  CheckCircle,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone,
  FileText,
  Tv,
  Radio,
  Building,
  Euro,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MotionCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Types de clients
type ClientType = "entreprise" | "particulier" | "institution";

// Schéma de validation de base
const baseSchema = z.object({
  // Informations de contact
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  
  // Type de client
  clientType: z.enum(["entreprise", "particulier", "institution"]),
  
  // Message
  message: z.string().min(20, "Décrivez votre projet en au moins 20 caractères"),
  
  // Consentement
  rgpd: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
});

// Schéma entreprise
const entrepriseSchema = baseSchema.extend({
  clientType: z.literal("entreprise"),
  entreprise: z.string().min(2, "Nom de l'entreprise requis"),
  siret: z.string().optional(),
  typeEvenement: z.string().min(1, "Type d'événement requis"),
  besoinLive: z.enum(["oui", "non", "peut-etre"]),
  nombreParticipants: z.string().optional(),
  datePrevisionnelle: z.string().optional(),
});

// Schéma particulier (mariage)
const particulierSchema = baseSchema.extend({
  clientType: z.literal("particulier"),
  typeProjet: z.string().min(1, "Type de projet requis"),
  dateMariage: z.string().optional(),
  lieuMariage: z.string().optional(),
  nombreInvites: z.string().optional(),
  budgetEstime: z.string().optional(),
});

// Schéma institution
const institutionSchema = baseSchema.extend({
  clientType: z.literal("institution"),
  nomStructure: z.string().min(2, "Nom de la structure requis"),
  typeStructure: z.string().min(1, "Type de structure requis"),
  projetSubventionne: z.enum(["oui", "non", "en-cours"]),
  nombreResidents: z.string().optional(),
});

// Union des schémas
const formSchema = z.discriminatedUnion("clientType", [
  entrepriseSchema,
  particulierSchema,
  institutionSchema,
]);

type FormData = z.infer<typeof formSchema>;

// Options pour les selects
const clientTypes = [
  { value: "entreprise", label: "Entreprise", icon: Users, theme: "corporate" },
  { value: "particulier", label: "Particulier (Mariage/Famille)", icon: Heart, theme: "rose" },
  { value: "institution", label: "Institution (EHPAD/Association)", icon: Building2, theme: "emotion" },
];

const entrepriseEventTypes = [
  "Conférence / Séminaire",
  "Assemblée Générale",
  "Formation / Workshop",
  "Lancement produit",
  "Interview / Témoignage",
  "Film institutionnel",
  "Webinaire",
  "Autre",
];

const particulierProjetTypes = [
  "Film de mariage",
  "Biographie vidéo (grands-parents)",
  "Récit de vie",
  "Événement familial",
  "Demande en mariage filmée",
  "Autre",
];

const institutionStructureTypes = [
  "EHPAD",
  "Résidence autonomie",
  "Hôpital / Clinique",
  "Association",
  "Centre de rééducation",
  "Autre structure médico-sociale",
];

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedClientType, setSelectedClientType] = useState<ClientType | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const clientType = watch("clientType");

  // Déterminer le thème en fonction du type de client
  const getTheme = () => {
    switch (clientType) {
      case "entreprise":
        return "corporate";
      case "particulier":
        return "rose";
      case "institution":
        return "emotion";
      default:
        return "emotion";
    }
  };

  const theme = getTheme();

  // Gestion des étapes
  const handleNextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    if (step === 1) {
      fieldsToValidate = ["clientType"];
    } else if (step === 2) {
      fieldsToValidate = ["prenom", "nom", "email", "telephone"];
      if (clientType === "entreprise") {
        fieldsToValidate.push("entreprise" as keyof FormData);
      } else if (clientType === "institution") {
        fieldsToValidate.push("nomStructure" as keyof FormData);
      }
    }

    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  // Soumission du formulaire
  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    // Simuler un envoi
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  // Rendu du formulaire soumis
  if (isSubmitted) {
    return (
      <MotionCard
        glowColor={theme === "corporate" ? "corporate" : theme === "rose" ? "rose" : "emotion"}
        className="p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-success/20 border border-success/30 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-success" />
        </motion.div>
        <h3 className="heading-md mb-4">Demande envoyée avec succès !</h3>
        <p className="body-md text-text-secondary mb-6">
          Merci pour votre confiance. Notre équipe vous recontactera sous 48h
          pour discuter de votre projet.
        </p>
        <Button
          variant={theme === "corporate" ? "corporate" : theme === "rose" ? "rose" : "emotion"}
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setSelectedClientType(null);
          }}
        >
          Nouvelle demande
        </Button>
      </MotionCard>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MotionCard
        glowColor={theme === "corporate" ? "corporate" : theme === "rose" ? "rose" : "emotion"}
        className="p-6 md:p-8"
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all",
                  step >= s
                    ? theme === "corporate"
                      ? "bg-corporate text-white"
                      : theme === "rose"
                      ? "bg-emotion-rose text-white"
                      : "bg-emotion text-white"
                    : "bg-white/10 text-text-muted"
                )}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={cn(
                "h-full rounded-full",
                theme === "corporate"
                  ? "bg-corporate"
                  : theme === "rose"
                  ? "bg-emotion-rose"
                  : "bg-emotion"
              )}
              initial={{ width: "0%" }}
              animate={{ width: `${((step - 1) / 2) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Étape 1 : Type de client */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2 mb-8">
                <h3 className="heading-md">Qui êtes-vous ?</h3>
                <p className="body-sm">
                  Sélectionnez votre profil pour un devis personnalisé
                </p>
              </div>

              <Controller
                name="clientType"
                control={control}
                render={({ field }) => (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {clientTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = field.value === type.value;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            field.onChange(type.value);
                            setSelectedClientType(type.value as ClientType);
                          }}
                          className={cn(
                            "p-6 rounded-xl border-2 transition-all duration-300 text-left",
                            isSelected
                              ? type.theme === "corporate"
                                ? "border-corporate bg-corporate/10 shadow-glow-corporate"
                                : type.theme === "rose"
                                ? "border-emotion-rose bg-emotion-rose/10 shadow-glow-rose"
                                : "border-emotion bg-emotion/10 shadow-glow-emotion"
                              : "border-white/10 hover:border-white/20 hover:bg-white/5"
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-8 h-8 mb-4",
                              isSelected
                                ? type.theme === "corporate"
                                  ? "text-corporate"
                                  : type.theme === "rose"
                                  ? "text-emotion-rose"
                                  : "text-emotion"
                                : "text-text-muted"
                            )}
                          />
                          <h4 className="font-heading font-semibold text-white mb-1">
                            {type.label}
                          </h4>
                        </button>
                      );
                    })}
                  </div>
                )}
              />
              {errors.clientType && (
                <p className="text-rec text-sm">{errors.clientType.message}</p>
              )}
            </motion.div>
          )}

          {/* Étape 2 : Informations de contact + spécifiques */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2 mb-8">
                <h3 className="heading-md">Vos coordonnées</h3>
                <p className="body-sm">Comment pouvons-nous vous recontacter ?</p>
              </div>

              {/* Champs de base */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prenom">
                    <User className="w-4 h-4 inline mr-2" />
                    Prénom *
                  </Label>
                  <Input
                    id="prenom"
                    placeholder="Votre prénom"
                    variant={clientType === "entreprise" ? "corporate" : "default"}
                    {...register("prenom")}
                  />
                  {errors.prenom && (
                    <p className="text-rec text-xs">{errors.prenom.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    placeholder="Votre nom"
                    variant={clientType === "entreprise" ? "corporate" : "default"}
                    {...register("nom")}
                  />
                  {errors.nom && (
                    <p className="text-rec text-xs">{errors.nom.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.fr"
                    variant={clientType === "entreprise" ? "corporate" : "default"}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-rec text-xs">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Téléphone *
                  </Label>
                  <Input
                    id="telephone"
                    type="tel"
                    placeholder="06 00 00 00 00"
                    variant={clientType === "entreprise" ? "corporate" : "default"}
                    {...register("telephone")}
                  />
                  {errors.telephone && (
                    <p className="text-rec text-xs">{errors.telephone.message}</p>
                  )}
                </div>
              </div>

              {/* Champs spécifiques Entreprise */}
              {clientType === "entreprise" && (
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="entreprise">
                        <Building className="w-4 h-4 inline mr-2" />
                        Nom de l&apos;entreprise *
                      </Label>
                      <Input
                        id="entreprise"
                        placeholder="Votre entreprise"
                        variant="corporate"
                        {...register("entreprise" as any)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="siret">SIRET (optionnel)</Label>
                      <Input
                        id="siret"
                        placeholder="000 000 000 00000"
                        variant="corporate"
                        {...register("siret" as any)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Champs spécifiques Institution */}
              {clientType === "institution" && (
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nomStructure">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Nom de l&apos;établissement *
                    </Label>
                    <Input
                      id="nomStructure"
                      placeholder="Nom de votre structure"
                      {...register("nomStructure" as any)}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Étape 3 : Détails du projet */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2 mb-8">
                <h3 className="heading-md">Votre projet</h3>
                <p className="body-sm">Parlez-nous de ce que vous souhaitez réaliser</p>
              </div>

              {/* Champs spécifiques Entreprise */}
              {clientType === "entreprise" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>
                        <Tv className="w-4 h-4 inline mr-2" />
                        Type d&apos;événement *
                      </Label>
                      <Controller
                        name={"typeEvenement" as any}
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger variant="corporate">
                              <SelectValue placeholder="Sélectionnez..." />
                            </SelectTrigger>
                            <SelectContent>
                              {entrepriseEventTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>
                        <Radio className="w-4 h-4 inline mr-2" />
                        Besoin de Live/Streaming ?
                      </Label>
                      <Controller
                        name={"besoinLive" as any}
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger variant="corporate">
                              <SelectValue placeholder="Sélectionnez..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="oui">Oui, c&apos;est essentiel</SelectItem>
                              <SelectItem value="peut-etre">À étudier</SelectItem>
                              <SelectItem value="non">Non, enregistrement uniquement</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>
                        <Users className="w-4 h-4 inline mr-2" />
                        Nombre de participants
                      </Label>
                      <Input
                        placeholder="Ex: 50-100"
                        variant="corporate"
                        {...register("nombreParticipants" as any)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Date prévisionnelle
                      </Label>
                      <Input
                        type="date"
                        variant="corporate"
                        {...register("datePrevisionnelle" as any)}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Champs spécifiques Particulier */}
              {clientType === "particulier" && (
                <>
                  <div className="space-y-2">
                    <Label>
                      <Heart className="w-4 h-4 inline mr-2" />
                      Type de projet *
                    </Label>
                    <Controller
                      name={"typeProjet" as any}
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent>
                            {particulierProjetTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Date de l&apos;événement
                      </Label>
                      <Input
                        type="date"
                        {...register("dateMariage" as any)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Lieu
                      </Label>
                      <Input
                        placeholder="Ville ou lieu de réception"
                        {...register("lieuMariage" as any)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>
                        <Users className="w-4 h-4 inline mr-2" />
                        Nombre d&apos;invités
                      </Label>
                      <Input
                        placeholder="Ex: 80-100"
                        {...register("nombreInvites" as any)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>
                        <Euro className="w-4 h-4 inline mr-2" />
                        Budget estimé
                      </Label>
                      <Controller
                        name={"budgetEstime" as any}
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="< 2000">Moins de 2 000 €</SelectItem>
                              <SelectItem value="2000-3000">2 000 - 3 000 €</SelectItem>
                              <SelectItem value="3000-4000">3 000 - 4 000 €</SelectItem>
                              <SelectItem value="> 4000">Plus de 4 000 €</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Champs spécifiques Institution */}
              {clientType === "institution" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>
                        <Building2 className="w-4 h-4 inline mr-2" />
                        Type de structure *
                      </Label>
                      <Controller
                        name={"typeStructure" as any}
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez..." />
                            </SelectTrigger>
                            <SelectContent>
                              {institutionStructureTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>
                        <Euro className="w-4 h-4 inline mr-2" />
                        Projet subventionné ?
                      </Label>
                      <Controller
                        name={"projetSubventionne" as any}
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="oui">Oui, financement acquis</SelectItem>
                              <SelectItem value="en-cours">En cours de demande</SelectItem>
                              <SelectItem value="non">Non / Je ne sais pas</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      <Users className="w-4 h-4 inline mr-2" />
                      Nombre de résidents / bénéficiaires
                    </Label>
                    <Input
                      placeholder="Ex: 80"
                      {...register("nombreResidents" as any)}
                    />
                  </div>
                </>
              )}

              {/* Message commun */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Décrivez votre projet *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Parlez-nous de votre projet, vos attentes, vos questions..."
                  variant={clientType === "entreprise" ? "corporate" : "default"}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-rec text-xs">{errors.message.message}</p>
                )}
              </div>

              {/* RGPD */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  className="mt-1"
                  {...register("rgpd")}
                />
                <Label htmlFor="rgpd" className="text-sm text-text-muted font-normal">
                  J&apos;accepte que mes données soient utilisées pour traiter ma demande
                  conformément à la{" "}
                  <a href="/confidentialite" className="text-emotion underline">
                    politique de confidentialité
                  </a>
                  . *
                </Label>
              </div>
              {errors.rgpd && (
                <p className="text-rec text-xs">{errors.rgpd.message}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
          {step > 1 ? (
            <Button type="button" variant="ghost" onClick={handlePrevStep}>
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <Button
              type="button"
              variant={theme === "corporate" ? "corporate" : theme === "rose" ? "rose" : "emotion"}
              onClick={handleNextStep}
            >
              Continuer
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant={theme === "corporate" ? "corporate" : theme === "rose" ? "rose" : "emotion"}
              isLoading={isSubmitting}
            >
              <Send className="w-4 h-4" />
              Obtenir mon estimation
            </Button>
          )}
        </div>
      </MotionCard>
    </form>
  );
}

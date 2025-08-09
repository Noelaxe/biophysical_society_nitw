import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import Image from "next/image"


const contents = [
    {
      id: 1,
      name: "Malavika Sunitha Renjith",
      title: "Optogenetics: Controlling Neurons with Light",
      date: "June 15, 2025",
      post: "Optogenetics is a cutting-edge technique in neuroscience that allows scientists to control the activity of specific brain cells using light. It combines genetics and optics (light) to give researchers the power to switch individual neurons on or off with incredible precision. This method is helping us understand how the brain works and how it controls everything from movement to mood. \n\n The process starts by inserting a gene for a light-sensitive protein—often taken from algae or certain bacteria—into specific neurons. These proteins, like channelrhodopsin or halorhodopsin, respond to light by opening or closing ion channels in the neuron. Once the neurons are modified to produce these proteins, scientists can shine light of a specific color onto them using thin optical fibers or tiny LEDs that are surgically placed into the brain. \n\n When blue light is used, some proteins make neurons fire signals. When yellow or green light is used, others can silence the neurons. This allows researchers to turn neurons on and off at will, often in a matter of milliseconds. That level of control is something that traditional methods like drugs or electrical stimulation can’t easily offer. \n\n Optogenetics has become a powerful tool for studying brain circuits. Scientists use it to understand how different groups of neurons control behavior, decision-making, emotions, memory, and even sleep. For example, by activating or silencing certain neurons, researchers can make a mouse feel fear, fall asleep, or even stop moving—just by turning on a light. \n\n  The technique has also opened new doors in medical research. In animal models, optogenetics is being used to study conditions like Parkinson’s disease, epilepsy, anxiety, and depression. It helps pinpoint which areas of the brain are involved in these disorders and how they might be treated more effectively in the future. \n\n Though it is still mostly used in research and animal studies, optogenetics has great potential in human therapy. Scientists are exploring ways it might one day help restore vision, control seizures, or improve mental health treatments. \n\n In short, optogenetics gives us a new way to understand and influence the brain—with light as the tool. It’s like giving scientists a remote control to explore the brain’s circuits, helping us uncover the secrets behind thoughts, actions, and emotions.",
      image1: "/images/blog/Blog-1-1.jpeg",
      caption1: "Axion Biosystems",
      image2: "/images/blog/Blog-1-2.jpeg",
      caption2: "Addgene",
      image3: "/images/blog/Blog-1-3.jpeg",
      caption3: "Brown CS",
    },
    {
      id: 2,
      name: "Malavika Sunitha Renjith",
      title: "Photodynamic Therapy: Using Light to Kill Cancer Cells",
      date: "June 15, 2025",
      post: "Photodynamic therapy (PDT) is a unique and less invasive method used to treat certain types of cancer and other diseases. It works by using a special combination of light and a drug that becomes active only when exposed to that light. This targeted approach helps destroy harmful cells while causing less damage to healthy ones. \n\n The process starts with a drug called a photosensitizer. This drug is either applied to the skin or injected into the bloodstream, depending on where the cancer is. The photosensitizer travels through the body and collects more in cancer cells than in normal cells. After a certain amount of time—usually hours or days—a specific wavelength of light is directed at the area where the drug has gathered. \n\n When the light hits the photosensitizer, it activates the drug, which reacts with oxygen in the tissue to create a type of toxic molecule called singlet oxygen. This molecule kills the nearby cancer cells. PDT can also damage blood vessels in the tumor, cutting off its supply of nutrients, and may even help trigger the immune system to attack the cancer. \n\n One of the big advantages of PDT is that it is very specific. Only the area exposed to light gets activated, which means healthy cells nearby are less likely to be harmed. It also causes fewer long-term side effects than chemotherapy or radiation. PDT can be repeated multiple times in the same area if needed. \n\n However, PDT does have some limits. Light can only reach tumors on or near the surface of the skin or inside the body if a light source can be inserted using a thin tube (endoscope). Also, after treatment, patients need to avoid sunlight and bright indoor light for a few days because their skin and eyes can become very sensitive to light. \n\n Photodynamic therapy is currently used to treat certain skin cancers, lung cancers, esophageal cancers, and even precancerous conditions. It is also being studied for use in treating infections, acne, and age-related macular degeneration in the eye. \n\n In simple terms, photodynamic therapy uses the power of light and a special drug to kill cancer cells with great accuracy. It offers hope for safer, targeted treatments that can be used alone or alongside other cancer therapies.",
      image1: "/images/blog/Blog-2-1.jpeg",
      caption1: "Photocarcinogenesis & Photoprotection, Springer",
      image2: "/images/blog/Blog-2-2.jpeg",
      caption2: "Hong, et al., 2016",
      image3: "/images/blog/Blog-2-3.jpeg",
      caption3: "illumacell",
    },
    {
      id: 3,
      name: "Anoushka Chatterjee",
      title: "Biophysics in Sports- Understanding Performance and Injury",
      date: "June 15, 2025",
      post: "Muscle cells, or myocytes, are responsible for carrying out both voluntary and involuntary movements in the body.There are 3 types of muscle cells- Skeletal, Smooth and Cardiac muscle cells. Skeletal muscle cells are striated, that is they have light and dark bands on them and these are found in the limbs to perform voluntary activities like picking up objects , moving things etc. Smooth muscles are non-striated and are used to perform involuntary activities in the internal organs of the body such as digestion, respiration etc. Cardiac muscles are striated and found in the heart to perform involuntary pumping of the blood. \n\n The muscle cells consist of alternate bands of light Actin bands (Isotropic bands or I bands ) and dark myosin bands (Anisotropic bands or A bands). The center of A band is marked by M-line and the center of I band is marked by Z-line. The space between 2 consecutive Z lines is called sarcomere which is the functional unit of muscle cells. Continuous involvement of energy and formation of cross power bridge using ATP (between the interaction of myosin and a protein called  tropomyosin in actin) leads to sliding of the filaments in the sarcomere.This the sarcomere shortens leading to contraction. Loss of energy leads to the relaxation of the muscle cells. This is how the usual muscle works when enough ATP is available. \n\n During heavy workout, in the absence of oxygen , the muscle cells undergo anaerobic respiration to produce lactic acid. High production of lactic acid causes cramps. Another form of muscle contraction observed is spasms wherein the muscle relaxation does not occur effectively. \n\n The force a muscle generates depends on sarcomere length. At optimal length , maximal overlap of muscle proteins allow the greatest number of cross-bridges and thus the greatest tension. If the muscle is too stretched or too compressed, the force decreases.That's why muscle warm-up and proper posture matter for peak performance and injury prevention. \n\n In case of muscle damage, the muscles are degraded by necrosis or cell death processes and replaced by a process called muscle regeneration taking place by satellite cells.These are muscle stem cells that reside in an inactive state until activated by injury or damage. \n\n The skeletal system, not only involves the muscles but also 206 bones and various kinds of joints. Joints like those found in the skull are immovable.  But synovial joints are movable in nature and include ball and socket joint (in the shoulders), hinge(in the knee), saddle (in the thumb), pivot (in the neck)etc. \n\n Hence, it  is a collective system of carefully connected design involving biomechanics and physics which helps us to move around.",
      image1: "/images/blog/Blog-3-1.jpeg",
      caption1: "BC Open Textbooks",
      image2: "/images/blog/Blog-3-2.jpeg",
      caption2: "Wikipedia",
      image3: "/images/blog/Blog-3-3.jpeg",
      caption3: "Lab Tests Guide",
    },
    {
      id: 4,
      name: "Anoushka Chatterjee",
      title: "The Physics of DNA Packaging in the Nucleus",
      date: "June 15, 2025",
      post: "Deoxynucleic acid (also abbreviated as DNA) is the most important blueprint of life. It consists of all the important information in the form of codons (triplets of nucleotides) that help to code for proteins required for performing biological activities. \n\n A typical human DNA structure is a right-handed double- helix structure with 3 main components- namely a pentose deoxyribose sugar, a phosphate group and nitrogenous bases. The 2 types of nitrogenous bases are purine and pyrimidine. Pyrimidine is a six membered ring which consists of 3 types- Cytosine(C), Thymine(T- also known as 5-methyl uracil) and Uracil (U). Thymine is found in DNA while it is replaced by Uracil in RNA.This is a result of stability due to evolutionary factors.Purines are fused heterocyclic compounds consisting of a six-membered pyrimidine ring and a five-membered imidazole ring.There  are 2 types of  purine- Adenine(A) and Guanine(G). By Chargaff’s law, a purine always pairs with a pyrimidine. Thus Adenine binds with Thymine and vice versa with 2 Hydrogen bonds while Guanine binds with Cytosine with 3 Hydrogen bonds. The phosphate group binds  to the 5’ end of the deoxyribose sugar and the nitrogenous base binds to the 1’ position of the deoxyribose sugar.  The phosphate group forms a 5’-3’ ester bond giving the double-helix DNA structure its polarity. Using the  X-ray diffraction data observed by Franklin and  Wilkins, the physical structure of DNA as a right-handed double helix was given by the famous Watson and Crick model. \n\n Due to the phosphate group attached to the DNA molecule ,the DNA acquires a negative charge. Due to its bulky size, DNA has to be properly packed into structures called nucleosomes to help them accommodate the dimensions of the cell. This is achieved by wrapping the Histone protein which is composed of arginine and lysine. The negatively  charged DNA wraps around the subunits of positively charged histone molecules namely H2A, H2B, H3 and H4. Two units of each kind of histone are used to wrap DNA. All the units come together to form a histone octamer which looks like a beads on a string structure. To join the nucleosomes together, linker histone H1, is used. The nucleosome along with the linker protein is called chromatosome. This structure is further organized into a 30 nm chromatin  structure which has 2 prescribed configurations: \n\n 1. Solenoid model \n 2. Zig-zag model. \n\n The exact structure is still under active study. \n\n Hence packaging of DNA in the nucleus is an active play of charges and this highly regulated packaging is responsible for proper expression of biologically active proteins.",
      image1: "/images/blog/Blog-4-1.jpeg",
      caption1: "Olins and Olins, 2003",
      image2: "/images/blog/Blog-4-2.jpeg",
      caption2: "Griffiths et al., 2004",
      image3: "/images/blog/Blog-4-3.jpeg",
      caption3: "GeeksforGeeks",
    },
    {
      id: 5,
      name: "Nurul Hayi",
      title: "MRI (Magnetic Resonance Imaging): A Biophysical Marvel",
      date: "July 16, 2025",
      post: `"Magnetic Resonance Imaging (MRI) is a sophisticated and non-invasive imaging technique that draws from the principles of quantum mechanics, nuclear magnetic resonance (NMR), and computational physics to visualize internal structures of the human body without using ionizing radiation. \n\n MRI involves the following physics: \n\n 1. Proton Spin and Magnetic Moments : At the core of MRI lies the hydrogen nucleus, which is found in abundance in biological tissues because of water and fat content. These protons have an intrinsic property called "spin" that gives rise to a magnetic moment, essentially turning each hydrogen nucleus into a tiny bar magnet. In their natural state, these magnetic moments point in random directions and cancel each other out. \n\n 2. The Static Magnetic Field (B₀) : When a patient enters the MRI scanner, they are exposed to a strong static magnetic field, commonly ranging from 1.5 to 3 Tesla but sometimes reaching up to 7 Tesla in research settings. This magnetic field causes a portion of the hydrogen nuclei to align either parallel (low energy) or antiparallel (high energy) to the field. This alignment creates a net longitudinal magnetization vector in the direction of the main magnetic field, B₀. \n\n 3. Radiofrequency (RF) Excitation Pulse :An RF pulse is then applied at the Larmor frequency (ω₀ = γB₀), where γ is the gyromagnetic ratio for hydrogen (approximately 42.58 MHz per Tesla). This RF pulse tips the net magnetization vector away from the z-axis into the transverse plane.This temporarily excites the protons by flipping their orientation into a higher energy state. \n\n 4. Relaxation: T1 and T2: Once the RF pulse stops, the protons start to return to equilibrium. T1 Relaxation (Longitudinal or Spin Lattice) refers to the time it takes for protons to realign with B₀. This helps differentiate tissues such as fat (which has a short T1) and fluids (which have a long T1). T2 Relaxation (Transverse or Spin Spin) is the time it takes for protons to lose coherence in the transverse plane due to interactions with neighboring spins. Water typically has a long T2, whereas muscle has a shorter one. \n\n 5. Signal Detection and Spatial Encoding: As the protons relax, they emit tiny radiofrequency signals. These signals are detected by receiver coils placed around the body.To determine the spatial location of these signals and form an image, gradient magnetic fields are applied in three directions: x, y, and z. These gradients cause spatial variation in the Larmor frequency, allowing for frequency encoding, phase encoding, slice selection. The scanner digitizes these signals and processes them using Fourier Transform techniques to reconstruct 2-D or 3-D anatomical images. \n\n Applications of MRI in Medicine \n\n MRI is extremely versatile and widely used in clinical and research settings: \n\n 1. Neurology-Detecting brain tumors, stroke, and multiple sclerosis, Functional MRI (fMRI) to map brain activity, Diffusion Tensor Imaging (DTI) to study white matter tracts \n\n 2. Musculoskeletal: Diagnosing joint injuries, ligament tears, and bone marrow disorders, Visualizing cartilage, muscle, and tendons in great detail \n\n 3. Cardiology: Imaging cardiac walls and detecting heart attacks or congenital defects, MRI angiography (MRA) for visualizing blood vessels \n\n 4. Oncology: Identifying and staging cancers such as prostate, liver, and breast, Monitoring the response of tumors to treatment \n\n Advantages of MRI \n\n 1. Does not use ionizing radiation, unlike X-rays or CT scans \n\n 2. Offers superior contrast for soft tissues \n\n 3. Provides multiple types of image contrasts  \n\n 4. Delivers high spatial and temporal resolution \n\n However, MRI is more expensive than other imaging methods, takes longer to perform, and may not be suitable for individuals with incompatible metallic implants. \n\n MRI is a remarkable combination of physics in medicine that uses behavior of protons into life-saving medical insights."`,
      image1: "/images/blog/Blog-5-1.jpeg",
      caption1: "Technology Networks",
      image2: "/images/blog/Blog-5-2.jpeg",
      caption2: "National Herald",
      image3: "/images/blog/Blog-5-3.jpeg",
      caption3: "MPO",
    },
]

export default function Blog() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
        <div className="bg-blue-950 text-white py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Till the Forces Do Them Part</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            While the dramas unfold, the forces within keep it together
          </p>
        </div>
      

      {/* Blog Post */}
      {contents.slice().reverse().map(content => (
      <div key={content.id}>
      <section className="mb-6 shadow-md hover:shadow-lg transition-shadow max-w-6xl mx-auto mt-20">
        <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold mb-2">{content.title}</h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" /> <span className="mr-4">{content.name}</span>
                    <Calendar className="w-4 h-4 mr-1" /> <span>{content.date}</span>
                </div>
                <p className="text-gray-700 whitespace-pre-line">
                    {content.post}
                </p>
                <br></br>
                <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
                  {/* Image + Caption */}
                  {[[content.image1, content.caption1], [content.image2, content.caption2], [content.image3, content.caption3]].map(([img, cap], index) => (
                    <div key={index} className="w-full md:w-1/3">
                      <div className="relative w-full h-[250px] md:h-[350px] rounded-xl shadow-xl overflow-hidden">
                        <Image
                          src={img}
                          alt={`Blog image ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-3 text-center">Source: {cap}</p>
                    </div>
                  ))}
                </div>
                  
            </div>
      </section>
      </div>  
    ))}

    </div>
  )
}


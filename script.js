


document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.getElementById('createButton');
    createButton.addEventListener('click', create);

    function create() {
        const inputIds = ['githublink', 'fname', 'phone', 'github', 'email', 'personalPage', 'objective', 'skillsPro', 'skillsTech', 'skillsSoft', 'vcs', 'ProName1', 
                            'TechStack1', 'ProDescri1', 'ProName2', 'TechStack2', 'ProDescri2', 'profile1frCompy', 'CopnyName1', 'Work1Des', 'DurationExperwnce1', 'profile1frCompy2', 
                            'CopnyName2', 'Work2Des', 'DurationExperwnce2', 'PGDurationStudies', 'InstitutionsPresent', 'cgpaPgDeg', 'UGDurationStudies', 'UGDegree', 'PastIntitution',
                            'cgpaUGDeg', 'CeriName1', 'organizationCertifi1', 'Durationcerti1', 'CeriName2', 'organizationCertifi2', 'Durationcerti3', 'CeriName3', 'organizationCertifi3',
                            'achivements1', 'achivements2', 'achivements3', 'achivements4'];

        const formData = {};
        inputIds.forEach(id => {
            const element = document.getElementById(id);
            formData[id] = element ? element.value : '';
        });

        function getMonthYearFromDate(dateString) {
            const [year, month] = dateString.split('-').slice(0, 2);
            return `${month}/${year}`;
        }

        const photoInput = document.getElementById('photo-input');
        let photoSrc = 'path/to/default/photo.jpg';

        if (photoInput.files.length > 0) {
            const photoFile = photoInput.files[0];
            photoSrc = URL.createObjectURL(photoFile);
        }

        const newPageHTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${formData['fname']} - Resume</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> 
            <style>
                *{
                    font-family: 'Times New Roman', Times, serif;
                }
                a:hover{
                    text-decoration: none;
                }
                a{
                    color: black;
                    text-decoration: none;
                }
                hr{
                    margin: 0px 0 4px 0;
                }
            </style>
        </head>
        <body class="bg-white">
            <div class="container p-4">
                <section class="container text-center">
                    <div class="row">
                        <div class="col-9">
                            <h1 style="font-size: 55px;">${formData['fname']}</h1>
        
                            <nav class="">
                                <div class="wider d-flex justify-content-between text-center px-5" style="width: 100%; font-size: 20px;">
                                    <a href="tel:${formData['phone']}" class="text-secondary " style="text-decoration: none;"><i class="fa-solid fa-phone"></i> - ${formData['phone']}</a> 
                                    <a href="${formData['githublink']}" class="text-secondary " style="text-decoration: none;"><i class="fa-brands fa-github"></i> - ${formData['github']}</a> 
                                </div>
                                
                                <div class="wider d-flex justify-content-between text-center px-5" style="width: 100%;  font-size: 20px;">
                                    <a href="mailto:${formData['email']}" class="text-secondary " style="text-decoration: none;"><i class="fa-solid fa-envelope"></i> - ${formData['email']}</a> 
                                    <a href="${formData['personalPage']}" class="text-secondary " style="text-decoration: none;"><i class="fa-solid fa-globe"></i> - ${formData['personalPage']}</a> 
                                </div>
                                
                                <br>
                            </nav>
                        </div>
                        <div class="col-3">
                            <div class="resume-photo">
                                 <img src="${photoSrc}" alt="User Photo"  class="img" style="height: auto; width: 200px ; padding:4px;">
                             </div>
                        </div>
                    </div>
                </section>
        
                <div class="container">
                    <div class="objective">
                         <h3><span style="font-size: 37px;">O</span>BJECTIVE</h3><hr>
                         <p>&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace; ${formData['objective']} </p>
                    </div>
                    <!-- Other sections of your resume template -->
                    <div class="Skills">
                        <h3><span style="font-size: 37px;">S</span>KILLS</h3><hr>
                        <h6>Programing Languages : ${formData['skillsPro']}</h6>
                        <h6>Technologies : ${formData['skillsTech']}</h6>
                        <h6>Soft Skills : ${formData['skillsSoft']}</h6>
                        <h6>Version control system : ${formData['vcs']}</h6>
                    </div>
                    <div class="Projects">
                        <h3><span style="font-size: 37px;">P</span>ROJECTS</h3><hr>
                        <div class="container">
                            <h4>- ${formData['ProName1']} <span style="font-size: 16px;" id="DatePro1"> </span></h4>
                            <h6>&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;- ${formData['TechStack1']}</h6>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-11">${formData['ProDescri1']}</div>
                            </div>
                        </div>
                        <div class="container mt-2">
                            <h4>- ${formData['ProName2']} <span style="font-size: 16px;" id="DatePro2"> </span></h4>
                            <h6>&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;- ${formData['TechStack2']}</h6>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-11">${formData['ProDescri2']}</div>
                            </div>
                        </div>
                    </div>
                    <div class="Work-Experience">
                        <h3><span style="font-size: 37px;">W</span>ORK EXPERIENCE</h3><hr>
                        <h3>${formData['profile1frCompy']} <small>| ${formData['CopnyName1']} | <span class="Datework1"></span></small></h3>
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-11">${formData['Work1Des']}</div>
                        </div>
                        <h3 class="mt-2">${formData['profile1frCompy2']} <small>| ${formData['CopnyName2']} | <span class="Datework2"></span></small></h3>
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-11">${formData['Work2Des']}</div>
                        </div>
                    </div>
                    <div class="Education">
                        <h3><span style="font-size: 37px;">E</span>DUCATION</h3><hr>
                        <div class="container d-flex justify-content-between">
                            <h5>${formData['PGDurationStudies']} | ${formData['UGDegree']} at ${formData['InstitutionsPresent']}</h5> 
                            <h5>CGPA ${formData['cgpaPgDeg']}/10</h5>
                        </div>
                        <div class="container d-flex justify-content-between">
                            <h5>${formData['UGDurationStudies']} | ${formData['UGDegree']} at ${formData['PastIntitution']}</h5> 
                            <h5>CGPA ${formData['cgpaUGDeg']}/10</h5>
                        </div>
                    </div>
                    <div class="Certification">
                        <h3><span style="font-size: 37px;">C</span>ERTIFICATION</h3><hr>
                        <h5>- ${formData['CeriName1']} | ${formData['organizationCertifi1']} [${formData['Durationcerti1']}]</h5>
                        <h5>- ${formData['CeriName2']} | ${formData['organizationCertifi2']} [${formData['Durationcerti3']}]</h5>
                        <h5>- ${formData['CeriName3']} | ${formData['organizationCertifi3']} [${formData['Durationcerti3']}]</h5>
                    </div>
                    <div class="AAA">
                        <h3><span style="font-size: 37px;">A</span>CHIEVEMENTS/<span style="font-size: 37px;">A</span>CTIVTY/<span style="font-size: 37px;">A</span>WARDS</h3><hr>
                        <h6>- ${formData['achivements1']}</h6>
                        <h6>- ${formData['achivements2']}</h6>
                        <h6>- ${formData['achivements3']}</h6>
                        <h6>- ${formData['achivements4']}</h6>
                    </div>
                </div>
            </div>
        
            <script>
                let interval = setTimeout(() => {
                    window.print();
                }, 2000);
            </script> 
        </body>
        </html>`;

        const newWindow = window.open();
        newWindow.document.open();
        newWindow.document.write(newPageHTML);
        newWindow.document.close();

        window.location.href = `${formData['fname'].toLowerCase()}_resume.html`;
    }
});

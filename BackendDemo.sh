rm -rf ~/workspace/bytes/trial_week_springboot_backend
mkdir -p ~/workspace/bytes
cd ~/workspace/bytes
git clone git@gitlab.crio.do:public_content/trial_week_springboot_backend.git
cd trial_week_springboot_backend
./gradlew bootRun

5.times do 
  Event.create({
    title: Faker::Football.competition,
    description: Faker::WorldCup.team,
    start_time: Faker::Time.forward(0, :morning),
    end_time:  Faker::Time.forward(0, :midnight) 
  })
end
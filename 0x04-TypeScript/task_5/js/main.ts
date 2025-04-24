interface MajorCredits {
  credits: number;
  // Brand property for nominal typing
  _majorBrand: void;
}

interface MinorCredits {
  credits: number;
  // Brand property for nominal typing
  _minorBrand: void;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Example usage (optional):
const math: MajorCredits = { credits: 3 } as MajorCredits;
const physics: MajorCredits = { credits: 4 } as MajorCredits;
const totalMajor = sumMajorCredits(math, physics);
console.log('Total Major Credits:', totalMajor.credits);

const art: MinorCredits = { credits: 2 } as MinorCredits;
const music: MinorCredits = { credits: 1 } as MinorCredits;
const totalMinor = sumMinorCredits(art, music);
console.log('Total Minor Credits:', totalMinor.credits);
